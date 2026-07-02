declare module 'pg' {
  export interface PoolConfig {
    user?: string;
    password?: string;
    host?: string;
    port?: number;
    database?: string;
    connectionString?: string;
    ssl?: any;
    [key: string]: any;
  }

  export interface QueryResult {
    rows: any[];
    rowCount: number;
    [key: string]: any;
  }

  export class Pool {
    constructor(config?: PoolConfig);
    query(sql: string, values?: any[]): Promise<QueryResult>;
    query(sql: string, callback?: (err: Error | null, result?: QueryResult) => void): void;
    query(sql: string, values: any[], callback?: (err: Error | null, result?: QueryResult) => void): void;
    end(): Promise<void>;
    on(event: string, listener: (...args: any[]) => void): this;
  }

  export class Client {
    constructor(config?: PoolConfig);
    connect(): Promise<void>;
    query(sql: string, values?: any[]): Promise<QueryResult>;
    end(): Promise<void>;
  }
}
