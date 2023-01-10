import { Notification } from "./notification";

describe("Notification", () => {
  it("should be able to create a notification", () => {
    const notification = new Notification({
      content: "Uma nova notificação teste",
      category: "social",
      recipientId: "example-recipient-id",
    });

    expect(notification).toBeTruthy();
  });
});
