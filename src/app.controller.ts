import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  Home() {
    return 'welcome to nest api';
  }
}
