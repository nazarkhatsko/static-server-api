import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { File, FileDocument } from "./schemas/file.schema";

@Injectable()
export class FilesService {
  constructor(
    @InjectModel(File.name)
    private readonly fileModel: Model<FileDocument>,
  ) {}

  async createFile(file: File) {
    return this.fileModel.create(file);
  }

  async isFileExistById(id: ObjectId) {
    return this.fileModel.exists({ _id: id });
  }

  async isFileExistByHash(hash: string) {
    return this.fileModel.exists({ hash });
  }

  async isFileExistByName(name: string) {
    return this.fileModel.exists({ name });
  }

  async findFileExistById(id: ObjectId) {
    return this.fileModel.findOne({ _id: id });
  }

  async findFileExistByHash(hash: string) {
    return this.fileModel.findOne({ hash });
  }

  async findFileExistByName(name: string) {
    return this.fileModel.findOne({ name });
  }

  async updateFileById(id: ObjectId, file: File) {
    await this.fileModel.updateOne({ _id: id }, file);
  }

  async updateFileByHash(hash: string, file: File) {
    await this.fileModel.updateOne({ hash }, file);
  }

  async updateFileByName(name: string, file: File) {
    await this.fileModel.updateOne({ name }, file);
  }

  async deleteFileById(id: ObjectId, file: File) {
    await this.fileModel.deleteOne({ _id: id }, file);
  }

  async deleteFileByHash(hash: string, file: File) {
    await this.fileModel.deleteOne({ hash }, file);
  }

  async deleteFileByName(name: string, file: File) {
    await this.fileModel.deleteOne({ name }, file);
  }
}
