import { SendNotification } from "./send-notification-service";

describe("Sen Notification", () => {
  it("test sen notification", async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      category: "teste",
      content: "Esta é uma notificação teste",
      recipientId: "teste-01",
    });

    expect(notification).toBeTruthy();
  });
});
