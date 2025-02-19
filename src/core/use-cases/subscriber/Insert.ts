import { SubscriberRepository } from "../../../infrastructure/repositories/subscriberRepository";
import { IInsertSubscribertDto } from "../../dtos/subscriberRepository";

class Insert {
  constructor(private repository: SubscriberRepository) {}

  async execute(dto: IInsertSubscribertDto) {
    return await this.repository.insert(dto);
  }
}
export { Insert };
