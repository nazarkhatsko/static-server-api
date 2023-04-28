import { Module } from "@nestjs/common";

// Modules
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
// import { ServeStaticModule } from "@nestjs/serve-static";
import { TokenModule } from "../token/token.module";
import { UsersModule } from "../users/users.module";
import { FilesModule } from "../films/files.module";
import { AuthModule } from "../auth/auth.module";

// Configurations
import SystemConfiguration from "../../configurations/system.configuration";
import JwtConfiguration from "../../configurations/jwt.configuration";
import MongodbConfiguration from "../../configurations/mongodb.configuration";

// Utils
// import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [SystemConfiguration, JwtConfiguration, MongodbConfiguration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>("mongodbUri"),
        useNewUrlParser: true,
      }),
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, "..", "public"),
    //   renderPath: "/static/*",
    //   exclude: ["/static*"],
    // }),
    TokenModule,
    UsersModule,
    FilesModule,
    AuthModule,
  ],
})
export class AppModule {}
