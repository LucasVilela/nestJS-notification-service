import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsRepository);
    const { notification } = await sendNotification.execute({
      recipientId: '123',
      content: 'New friend request',
      category: 'test',
    });

    expect(notificationsRepository.notifications.length).toBe(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
