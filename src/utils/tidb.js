import { connect } from '@tidbcloud/serverless';
import { fullFleetCategories } from '../data/fleetData';

// TiDB Cloud Serverless Connection Config
const host = import.meta.env.VITE_TIDB_HOST || 'gateway01.ap-southeast-1.prod.aws.tidbcloud.com';
const username = import.meta.env.VITE_TIDB_USER || '2NZ98TsqYW9Ftow.root';
const password = import.meta.env.VITE_TIDB_PASSWORD || 'IbLVkvv6WzgJB8k8';
const database = import.meta.env.VITE_TIDB_DATABASE || 'balatravels';

export const db = connect({
  host,
  username,
  password,
  database
});

// Helper to compress image data URIs or long URLs
export const compressImage = (imageStr) => {
  if (!imageStr) return '/images/crysta.png';
  if (imageStr.length > 500000) {
    // Truncate or use lightweight webp fallback if payload is extremely huge
    return imageStr.slice(0, 300000);
  }
  return imageStr;
};

// Auto-initialize Database Tables and Seed Initial Data
export const initTiDBTables = async () => {
  try {
    // 1. Enquiries Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS enquiries (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        pickup VARCHAR(255),
        drop_location VARCHAR(255),
        category VARCHAR(100),
        model VARCHAR(100),
        travel_date VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 2. Vehicles Table (Holds all 38 default + custom vehicles)
    await db.execute(`
      CREATE TABLE IF NOT EXISTS vehicles (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category_title VARCHAR(100) NOT NULL,
        tagline VARCHAR(255),
        seats VARCHAR(50),
        ac VARCHAR(50),
        luggage VARCHAR(50),
        image TEXT,
        description TEXT,
        is_custom INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 3. Blogs Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS blogs (
        id VARCHAR(100) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(100),
        excerpt TEXT,
        author VARCHAR(100) DEFAULT 'Bala Travels Desk',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 4. Deleted Categories Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS deleted_categories (
        title VARCHAR(100) PRIMARY KEY
      );
    `);

    // Seed 38 default vehicles into TiDB Cloud if empty
    const countCheck = await db.execute('SELECT COUNT(*) as cnt FROM vehicles');
    const rowCount = countCheck?.rows?.[0]?.cnt || countCheck?.rows?.[0]?.['COUNT(*)'] || 0;

    if (rowCount === 0) {
      console.log('🌱 Seeding 38 vehicles into TiDB Cloud database...');
      let globalIdx = 0;
      for (const cat of fullFleetCategories) {
        for (let i = 0; i < cat.vehicles.length; i++) {
          const v = cat.vehicles[i];
          const vId = v.id || `veh-${cat.id}-${i}-${globalIdx++}`;
          await db.execute({
            sql: `INSERT IGNORE INTO vehicles (id, name, category_title, tagline, seats, ac, luggage, image, description, is_custom)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0)`,
            args: [
              vId,
              v.name,
              cat.title,
              v.tagline || `${cat.title} Vehicle for Outstation & City Rides`,
              v.capacity || '5 Seats',
              'Dual AC',
              '2 Large Bags',
              v.image || '/images/crysta.png',
              v.description || `Clean, comfortable ${v.name} ideal for long tours and city travel.`
            ]
          });
        }
      }
    }

    console.log('✅ TiDB Cloud Database tables & 38 vehicles synced successfully!');
  } catch (err) {
    console.warn('⚠️ TiDB init note:', err?.message || err);
  }
};

// Fire initial table verification
initTiDBTables();
