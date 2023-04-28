import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { join } from "path";
import { existsSync } from "fs";
import { readFile, unlink, writeFile } from "fs/promises";
import { UsersService } from "../users/users.service";
import { FilesService } from "../films/files.service";

@Injectable()
export class StorageService {
  private readonly storagePath: string;

  constructor(
    private readonly usersService: UsersService,
    private readonly filesService: FilesService,
    private readonly configService: ConfigService,
  ) {
    this.storagePath = configService.get<string>("storagePath");
  }

  isFileExist(fileName: string): boolean {
    return existsSync(join(this.storagePath, fileName));
  }

  async getFile(fileName: string): Promise<string> {
    return readFile(join(this.storagePath, fileName), "utf8");
  }

  async uploadFile(fileName: string, data: string): Promise<void> {
    await writeFile(join(this.storagePath, fileName), data);
  }

  async deleteFile(fileName: string): Promise<void> {
    await unlink(join(this.storagePath, fileName));
  }
}
