import { Pool } from "pg";
import { getServerConfig } from "../config.server";

const pool = new Pool({ connectionString: getServerConfig().databaseUrl });

export { pool };
