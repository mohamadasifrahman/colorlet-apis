import { Pool } from 'pg';
import appConfig from './appConfig';

const pool = new Pool({
    connectionString: appConfig.database.URI
});

export default pool;
