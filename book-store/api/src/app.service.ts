import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): string {
    return `
      <h1 style="font-family: system-ui; text-align:center">
        API is listening at PORT: ${process.env.PORT || 3000} 🥳 🎉
      </h1>
    `;
  }
}
