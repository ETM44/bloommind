import { Body, Controller, Get, Post } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
    constructor(private readonly helloService: HelloService) {}

    @Post()
    async createHello(@Body('hello') hello: string) {
        return this.helloService.createHello(hello);
    }

    @Get()
    async getAllHellos() {
        return this.helloService.getAllHellos();
    }
}