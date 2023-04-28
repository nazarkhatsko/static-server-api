// import {
//   Controller,
//   Get,
//   Post,
//   Delete,
//   Param,
//   UploadedFile,
//   UseInterceptors,
//   NotFoundException,
//   UseGuards,
// } from "@nestjs/common";
// import { FileInterceptor } from "@nestjs/platform-express";
// import { JwtAuthGuard } from "../../guards/jwt-auth.guard";
// import { FilesService } from "./files.service";

// @Controller("files")
// export class FilesController {
//   constructor(
//     private readonly filmsService: FilesService,
//   ) {}

//   @UseGuards(JwtAuthGuard)
//   @Get("/:fileHash")
//   getFile(@Param("fileHash") fileHash: string) {
//     // return this.storageService.getFile(fileHash);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Post("/upload")
//   @UseInterceptors(FileInterceptor("file"))
//   uploadFile(@UploadedFile() file: Express.Multer.File) {
//     // this.storageService.uploadFile(file.originalname, file.buffer.toString("utf8"));
//   }

//   @UseGuards(JwtAuthGuard)
//   @Delete("/delete/:fileHash")
//   deleteFile(@Param("fileHash") fileHash: string) {
//     // if (!this.storageService.isFileExist(fileHash)) {
//     //   throw new NotFoundException("File not found");
//     // }
//     // this.storageService.deleteFile(fileHash);
//   }
// }
