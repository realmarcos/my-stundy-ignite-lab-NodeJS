import { Notification } from "src/entitities/notification";

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}

class SendNotification {
  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;
    const notification = new Notification({
      recipientId,
      content,
      category,
      createdAt: new Date(),
    });

    return {
      notification,
    };
  }
}

export { SendNotification };
