import { Injectable } from "@nestjs/common";
import { readFile, writeFile, unlink, readdir } from "fs/promises";
import { existsSync, lstatSync } from "fs";
import { join } from "path";

@Injectable()
export class AppService {
  STATIC_PATH = "./public/";

  isFileExist(fileName: string): boolean {
    return existsSync(join(this.STATIC_PATH, fileName));
  }

  async getListFiles(): Promise<string[]> {
    const filesList = (await readdir(this.STATIC_PATH)).filter(
      (file) => !lstatSync(file).isDirectory(),
    );
    return filesList;
  }

  async getFile(fileName: string): Promise<string> {
    return readFile(join(this.STATIC_PATH, fileName), "utf8");
  }

  async uploadFile(fileName: string, data: string): Promise<void> {
    await writeFile(join(this.STATIC_PATH, fileName), data);
  }

  async deleteFile(fileName: string): Promise<void> {
    await unlink(join(this.STATIC_PATH, fileName));
  }
}
