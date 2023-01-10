import {
  INotificationProps,
  Notification,
} from "src/app/entitities/notification";

type Override = Partial<INotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: "social",
    content: "Nova solicitação de amizade!",
    recipientId: "recipient-2",
    ...override,
  });
}
