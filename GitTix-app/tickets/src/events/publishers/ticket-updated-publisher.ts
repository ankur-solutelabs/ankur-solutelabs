import { Publisher, Subjects, TicketUpdatedEvent } from '@ankurpandey131/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
