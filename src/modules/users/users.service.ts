import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(user: User) {
    return this.userModel.create(user);
  }

  async getAllUsers() {
    return this.userModel.find();
  }

  async isUserExistById(id: ObjectId) {
    return this.userModel.exists({ _id: id });
  }

  async isUserExistByUsername(username: string) {
    return this.userModel.exists({ username });
  }

  async isUserExistByEmail(email: string) {
    return this.userModel.exists({ email });
  }

  async findById(id: ObjectId) {
    return this.userModel.findOne({ _id: id });
  }

  async findByUsername(username: string) {
    return this.userModel.findOne({ username });
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  async updateUserById(id: ObjectId, user: User) {
    await this.userModel.updateOne({ _id: id }, user);
  }

  async updateUserByUsername(username: string, user: User) {
    await this.userModel.updateOne({ username }, user);
  }

  async updateUserByEmail(email: string, user: User) {
    await this.userModel.updateOne({ email }, user);
  }

  async deleteUserById(id: ObjectId, user: User) {
    await this.userModel.deleteOne({ _id: id }, user);
  }

  async deleteUserByUsername(username: string, user: User) {
    await this.userModel.deleteOne({ username }, user);
  }

  async deleteUserByEmail(email: string, user: User) {
    await this.userModel.deleteOne({ email }, user);
  }
}
