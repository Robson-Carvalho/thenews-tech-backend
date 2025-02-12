import postgres, { Sql } from "postgres";

class PostgreSQL {
  private static instance: PostgreSQL;
  private sql: Sql;

  private constructor() {
    this.sql = postgres(`${process.env.DATABASE_URL}`);
  }

  public static getInstance(): PostgreSQL {
    if (!PostgreSQL.instance) {
      PostgreSQL.instance = new PostgreSQL();
    }

    return PostgreSQL.instance;
  }

  public async connect() {
    try {
      const response = await this.sql`SELECT version()`;
      const { version } = response[0];
      console.log(`Connected to PostgreSQL version: ${version}`);
    } catch (error) {
      console.error("Error connecting to the database:", error);
      throw new Error("Database connection failed");
    }
  }

  public getSQL(): Sql {
    return this.sql;
  }
}

export { PostgreSQL };
