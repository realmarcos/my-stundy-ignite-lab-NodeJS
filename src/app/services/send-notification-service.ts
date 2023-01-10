import { Injectable } from "@nestjs/common";
import { Notification } from "../entitities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ISendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content,
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
