import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return "Hello World!";
  }

  @Get("/hi-there")
  getHiThereRoute() {
    return "Hi there!";
  }

  @Get("/bye-there")
  getByThereRoute() {
    return "Bye there!";
  }

  @Get("/foo")
  getFooBarRoute() {
    return { foo: "bar" };
  }
}
