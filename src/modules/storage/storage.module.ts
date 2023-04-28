import { Module } from "@nestjs/common";
import { StorageController } from "./storage.controller";
import { StorageService } from "./storage.service";
import { UsersModule } from "../users/users.module";
import { FilesModule } from "../films/files.module";

@Module({
  imports: [UsersModule, FilesModule],
  controllers: [StorageController],
  providers: [StorageService],
})
export class StorageModule {}
