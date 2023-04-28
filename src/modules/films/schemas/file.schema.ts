import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { User } from "../../../modules/users/schemas/user.schema";

export type FileDocument = HydratedDocument<File>;

@Schema({
  collection: "files",
  versionKey: false,
  timestamps: false,
})
export class File {
  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  hash: string;

  @Prop({
    required: true,
    type: Types.ObjectId,
    ref: User.name,
  })
  owner: Types.ObjectId;

  @Prop({
    required: true,
    type: String,
  })
  name: string;

  @Prop({
    required: true,
    type: Number,
  })
  size: number;

  @Prop({
    required: true,
    type: Date,
  })
  uploadedAt: Date;
}

export const FileSchema = SchemaFactory.createForClass(File);
