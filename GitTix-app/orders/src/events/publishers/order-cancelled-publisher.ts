import { Subjects, Publisher, OrderCancelledEvent } from '@ankurpandey131/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
