import { Publisher, Subjects, TicketCreatedEvent } from '@ankurpandey131/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
