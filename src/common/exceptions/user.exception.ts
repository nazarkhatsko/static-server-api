import { HttpException, HttpStatus } from "@nestjs/common";

export class UserException extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class UserDoesNotExistException extends UserException {
  constructor() {
    super("User doesn't exist");
  }
}

export class UserAlreadyExistException extends UserException {
  constructor() {
    super("User already exist");
  }
}

export class UserWrongCredentialsException extends UserException {
  constructor() {
    super("Wrong credentials");
  }
}
