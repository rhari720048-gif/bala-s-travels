import { connect } from '@tidbcloud/serverless';

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

// Auto-initialize Database Tables on Startup
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

    // 2. Custom Vehicles Table
    await db.execute(`
      CREATE TABLE IF NOT EXISTS custom_vehicles (
        id VARCHAR(100) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category_title VARCHAR(100) NOT NULL,
        tagline VARCHAR(255),
        seats VARCHAR(50),
        ac VARCHAR(50),
        luggage VARCHAR(50),
        image TEXT,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('✅ TiDB Cloud Serverless database tables verified & ready!');
  } catch (err) {
    console.warn('⚠️ TiDB init warning (using offline fallback if unreachable):', err?.message || err);
  }
};

// Initialize tables asynchronously
initTiDBTables();
