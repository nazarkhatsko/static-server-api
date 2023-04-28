import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-in")
  async signIn(@Body() signInDto: SignInDto) {
    await this.authService.singIn(signInDto);
  }

  @Post("sign-up")
  async signUp(@Body() signUpDto: SignUpDto) {
    await this.authService.singUp(signUpDto);
  }
}
