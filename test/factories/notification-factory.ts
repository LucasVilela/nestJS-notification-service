import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Overwrite = Partial<NotificationProps>;

export function makeNotification(overwrite: Overwrite = {}) {
  return new Notification({
    category: 'social',
    content: new Content('New friend request'),
    recipientId: 'example-recipient-id',
    ...overwrite,
  });
}
