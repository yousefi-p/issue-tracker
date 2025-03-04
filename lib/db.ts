import postgres from 'postgres';

// PostgreSQL connection configuration
const config = {
  host: process.env.POSTGRES_HOST || 'localhost',
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT, 10) : 5432, // Default PostgreSQL port
  database: process.env.POSTGRES_DATABASE || 'defaultDatabase',
  user: process.env.POSTGRES_USER || 'defaultUser',
  password: process.env.POSTGRES_PASSWORD || 'defaultPassword',
  // Add any additional options if needed, e.g.,
  // max: 10, // Max number of connections in pool
  // idle_timeout: 30, // Idle timeout in seconds
};

// Use a global variable to store the database client
declare global {
  var _postgresClient: postgres.Sql | undefined;
}

let sql: postgres.Sql;

if (!globalThis._postgresClient) {
  globalThis._postgresClient = postgres(config);

  // Test the connection and handle connection errors
    (async () => {
      try {
        if (globalThis._postgresClient) {
          await globalThis._postgresClient`SELECT 1`;
        } else {
          throw new Error('PostgreSQL client is not initialized');
        }
        console.log('Connected to PostgreSQL');
      } catch (error) {
        console.error('PostgreSQL Connection Failed -', error);
        process.exit(1); // Exit the process if the connection fails
      }
    })();
    sql = globalThis._postgresClient
} else {
  sql = globalThis._postgresClient
}

export default sql;
