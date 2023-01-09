export interface INotificationProps {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

class Notification {
  private props: INotificationProps;

  constructor(props: INotificationProps) {
    this.props = props;
  }
}

export { Notification };
