import { Content } from './content';
import { Notification } from './notification';

describe('Given the Notification entity', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notification({
      recipientId: '123',
      content: new Content('New friend request'),
      category: 'test',
    });

    expect(notification).toBeTruthy();
  });
});
