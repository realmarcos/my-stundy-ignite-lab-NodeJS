import { Notification } from "./notification";

describe("Notification", () => {
  it("criar uma nova notificação", () => {
    const notification = new Notification({
      category: "teste categoria",
      content: "Uma nova notificação teste",
      recipientId: "teste",
      createdAt: new Date(),
    });
    expect(notification).toBeTruthy();
  });
});
