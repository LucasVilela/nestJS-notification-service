import { Content } from './content';

describe('Given the Content entity', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Hello World');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification with less then 5 characters', () => {
    expect(() => {
      new Content('1234');
    }).toThrow();
  });

  it('should not be able to create a notification with more then 240 characters', () => {
    expect(() => {
      new Content('a'.repeat(241));
    }).toThrow();
  });
});
