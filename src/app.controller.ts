import { Controller, Post, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { PrismaService } from "./prisma.service";

@Controller("notifications")
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: "1",
        content: "Teste notificação",
        category: "teste",
        recipientId: "1",
      },
    });
  }
}
