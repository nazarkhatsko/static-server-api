import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UsersService } from "../users/users.service";
import { TokenService } from "../token/token.service";
import { SignInDto } from "./dtos/sign-in.dto";
import { SignUpDto } from "./dtos/sign-up.dto";
import {
  UserAlreadyExistException,
  UserDoesNotExistException,
  UserWrongCredentialsException,
} from "../../common/exceptions/user.exception";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokenService: TokenService,
  ) {}

  async singIn(signInDto: SignInDto) {
    if (!(await this.usersService.isUserExistByUsername(signInDto.username))) {
      throw new UserDoesNotExistException();
    }

    const user = await this.usersService.findByUsername(signInDto.username);
    const validatedUser = await bcrypt.compare(
      signInDto.password,
      user.password,
    );
    if (!validatedUser) {
      throw new UserWrongCredentialsException();
    }

    const token = await this.tokenService.generateJwtToken(user);
    return { token };
  }

  async singUp(signUpDto: SignUpDto) {
    if (await this.usersService.isUserExistByUsername(signUpDto.username)) {
      throw new UserAlreadyExistException();
    } else if (await this.usersService.isUserExistByEmail(signUpDto.email)) {
      throw new UserAlreadyExistException();
    }

    signUpDto.password = await bcrypt.hash(signUpDto.password, 10);

    await this.usersService.createUser({
      username: signUpDto.username,
      email: signUpDto.email,
      password: signUpDto.password,
    });
  }
}
