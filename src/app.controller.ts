import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UploadedFile,
  UseInterceptors,
  NotFoundException,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/list")
  async getListFiles(): Promise<string[]> {
    return this.appService.getListFiles();
  }

  @Post("/upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<void> {
    this.appService.uploadFile(file.originalname, file.buffer.toString("utf8"));
  }

  @Delete("/delete/:fileName")
  async deleteFile(@Param("fileName") fileName: string): Promise<void> {
    if (!this.appService.isFileExist(fileName)) {
      throw new NotFoundException("File not found");
    }
    this.appService.deleteFile(fileName);
  }
}
