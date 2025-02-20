// models/Application.ts
import { Schema, model, models } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const ApplicationSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  cv: { type: String, required: true },
});

ApplicationSchema.plugin(mongoosePaginate);

const Application = models.Application || model('Application', ApplicationSchema);

export default Application;