import mongoose, { Model } from "mongoose";
import { ContactSchemaType } from "../../types/types";
import { contactSchema } from "./schema";

const ContactModel : Model<ContactSchemaType> = mongoose.models.Contact || mongoose.model('Contact',contactSchema);

export default ContactModel;