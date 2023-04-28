import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateJwtToken(data: any) {
    const payload = { data };
    return this.jwtService.sign(payload, {
      secret: this.configService.get<string>("jwtSecret"),
      expiresIn: this.configService.get<string>("jwtExpirationTime"),
    });
  }
}
