import {
  IDeleteSubscriberDto,
  IInsertSubscribertDto,
} from "../../dtos/subscriberRepository";

interface ISubscriberRepository {
  insert(dto: IInsertSubscribertDto): Promise<void>;
  getCount(): Promise<number>;
  delete(dto: IDeleteSubscriberDto): Promise<void>;
}
export { ISubscriberRepository };
