import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FilesService } from "./files.service";
import { File, FileSchema } from "./schemas/file.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
  ],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
