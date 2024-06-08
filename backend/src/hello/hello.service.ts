import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HelloService {
    constructor(private prisma: PrismaService) {}

    async createHello(hello: string) {
        return this.prisma.hello.create({
            data: { 
                hello: hello,
            },
        });
    }

    async getAllHellos() {
        return this.prisma.hello.findMany();
    }
}