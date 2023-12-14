import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World get!';
  }

  postHello(): string {
    return 'Hello World post!';
  }
}
