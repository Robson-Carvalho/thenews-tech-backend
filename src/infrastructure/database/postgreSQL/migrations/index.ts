import { Sql } from "postgres";

class CreateSubscribersTableMigration {
  private sql: Sql;

  constructor(sql: Sql) {
    this.sql = sql;
  }

  async up(): Promise<void> {
    try {
      await this.sql`
        CREATE TABLE IF NOT EXISTS subscribers (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) NOT NULL UNIQUE,
          created_at TIMESTAMP DEFAULT NOW()
        )
      `;
      console.log("Subscribers table created or already exists.");
    } catch (error) {
      console.error("Error creating subscribers table:", error);
      throw new Error("Failed to create subscribers table");
    }
  }
}

export { CreateSubscribersTableMigration };
