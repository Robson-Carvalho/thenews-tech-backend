import { Sql } from "postgres";
import { ISubscriberRepository } from "../../core/domain/repositories/ISubscriberRepository";
import { ConflictError, InternalServerError } from "../../core/errors/errors";
import { PostgreSQL } from "../database/postgreSQL";
import {
  IDeleteSubscriberDto,
  IInsertSubscribertDto,
} from "../../core/dtos/subscriberRepository";
import { Subscriber } from "../../core/domain/models/subscriber";

class SubscriberRepository implements ISubscriberRepository {
  private sql: Sql;

  constructor(db: PostgreSQL) {
    this.sql = db.getSQL();
  }

  async insert(dto: IInsertSubscribertDto): Promise<void> {
    const { email } = dto;

    try {
      await this.sql`
        INSERT INTO subscribers (email, created_at)
        VALUES (${email}, NOW())
    `;
    } catch (error: any) {
      console.error("Error inserting subscriber:", error);
      if (error.code === "23505") {
        throw new ConflictError("Subscriber already exists");
      }
      throw new InternalServerError("Failed to insert subscriber");
    }
  }

  async getAll(): Promise<Subscriber[]> {
    try {
      const result = await this.sql<
        { id: string; email: string; createdAt: string }[]
      >`
        SELECT * FROM subscribers
      `;

      return result.map((row) =>
        Subscriber.create(row.id, row.email, row.createdAt)
      );
    } catch (error) {
      console.error("Error getting subscribers:", error);
      throw new InternalServerError("Failed to get subscribers");
    }
  }

  async getCount(): Promise<number> {
    try {
      const result = await this.sql<{ count: string }[]>`
        SELECT COUNT(*) FROM subscribers
      `;
      return parseInt(result[0].count, 10);
    } catch (error) {
      console.error("Error getting subscriber count:", error);
      throw new InternalServerError("Failed to get subscriber count");
    }
  }

  async delete(dto: IDeleteSubscriberDto): Promise<void> {
    const { email } = dto;

    try {
      await this.sql`DELETE FROM subscribers WHERE email = ${email}`;
    } catch (error) {
      console.error("Error deleting subscriber:", error);
      throw new InternalServerError("Failed to delete subscriber");
    }
  }
}

export { SubscriberRepository };
