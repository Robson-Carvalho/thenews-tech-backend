import { SubscriberRepository } from "../../../infrastructure/repositories/subscriberRepository";
import { IDeleteSubscriberDto } from "../../dtos/subscriberRepository";

class Delete {
  constructor(private repository: SubscriberRepository) {}

  async execute(dto: IDeleteSubscriberDto) {
    return await this.repository.delete(dto);
  }
}
export { Delete };
