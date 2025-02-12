import { SubscriberRepository } from "../../../infrastructure/repositories/subscriberRepository";
import { IDeleteSubscriberDto } from "../../dtos/subscriberRepository";

class GetCount {
  constructor(private repository: SubscriberRepository) {}

  async execute() {
    return await this.repository.getCount();
  }
}
export { GetCount };
