import { Schema, model, models, Document, Model, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

// Define the IApplication interface
export interface IApplication extends Document {
  _id: Types.ObjectId; // Explicitly define _id
  name: string;
  email: string;
  phone: string;
  position: string;
  cv: string;
}

// Define the IApplicationModel interface
interface IApplicationModel extends Model<IApplication> {
  paginate: (query: any, options: any) => Promise<any>;
}

const ApplicationSchema = new Schema<IApplication>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  cv: { type: String, required: true },
});

ApplicationSchema.plugin(mongoosePaginate);

const Application: IApplicationModel =
  (models.Application as IApplicationModel) ||
  model<IApplication, IApplicationModel>('Application', ApplicationSchema);

export default Application;
