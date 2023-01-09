## Repositórios (repositories)

Os repositórios são uma forma de representar os métodos do banco de dados que a aplicação precisa para rodar, de maneira mais simple é um contrato que a aplicação precisa possuir com o banco, dessa maneira desaclopamos a dependência de qualquer ORM ou banco de dados.

``export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}``
