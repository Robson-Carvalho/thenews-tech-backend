import postgres, { Sql } from "postgres";
import { CreateSubscribersTableMigration } from "./migrations";

class PostgreSQL {
  private static instance: PostgreSQL;
  private sql: Sql;

  private constructor() {
    this.sql = postgres(`${process.env.DATABASE_URL}`);
  }

  public async migrations() {
    try {
      const migration = new CreateSubscribersTableMigration(this.sql);
      await migration.up();
      console.log("Migration applied successfully.");
    } catch (error) {
      console.error("Error applying migration:", error);
    }
  }

  public static getInstance(): PostgreSQL {
    if (!PostgreSQL.instance) {
      PostgreSQL.instance = new PostgreSQL();
    }

    return PostgreSQL.instance;
  }

  public async connect() {
    try {
      await this.migrations();
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
