import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  Home() {
    return 'welcome to nest api';
  }
}
