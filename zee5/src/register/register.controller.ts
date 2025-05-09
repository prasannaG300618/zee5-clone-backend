import { Body, Controller, Get, Post } from '@nestjs/common';
import { registerDto } from './dto/register.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}
  @Get()
  getHello(): any {
    return 'Registered';
  }
  @Post()
  display(@Body() data: registerDto) {
    return this.registerService.register(data);
  }
}
