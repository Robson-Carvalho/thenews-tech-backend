import { Request, Response, NextFunction } from "express";
import { InternalServerError, ValidationError } from "../../core/errors/errors";
import { SubscriberRepository } from "../../infrastructure/repositories/subscriberRepository";
import { Insert } from "../../core/use-cases/subscriber/Insert";
import { Delete } from "../../core/use-cases/subscriber/Delete";
import { GetCount } from "../../core/use-cases/subscriber/GetCount";

class SubscriberController {
  private repository: SubscriberRepository;
  private _insert: Insert;
  private _delete: Delete;
  private _getCount: GetCount;

  constructor(_repository: SubscriberRepository) {
    this.repository = _repository;
    this._insert = new Insert(this.repository);
    this._delete = new Delete(this.repository);
    this._getCount = new GetCount(this.repository);
  }

  async insert(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      if (!email) {
        throw new ValidationError("E-mail required!");
      }

      await this._insert.execute({ email });

      res.status(201).json({ status: "Success", message: "Registered" });
    } catch (error: any) {
      if (!(error instanceof InternalServerError)) {
        return next(error);
      }

      return next(new Error());
    }
  }

  async getCount(req: Request, res: Response, next: NextFunction) {
    try {
      const count = await this._getCount.execute();

      res.status(201).json({
        status: "Success",
        data: {
          count,
        },
      });
    } catch (error: any) {
      if (!(error instanceof InternalServerError)) {
        return next(error);
      }

      return next(new Error());
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;

      if (!email) {
        throw new ValidationError("E-mail required!");
      }

      this._delete.execute({ email });

      res.status(200).json({ status: "Success", message: "Deleted" });
    } catch (error: any) {
      if (!(error instanceof InternalServerError)) {
        return next(error);
      }

      return next(new Error());
    }
  }
}

export { SubscriberController };
