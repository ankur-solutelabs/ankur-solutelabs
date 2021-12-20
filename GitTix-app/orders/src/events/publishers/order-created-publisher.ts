import { Publisher, OrderCreatedEvent, Subjects } from '@ankurpandey131/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
