import {Schema} from 'mongoose';
import {ContactSchemaType } from '../../types/types';

export const contactSchema = new Schema<ContactSchemaType>({
    name: String,
    email: String,
    comment: String,
    date: {type: Date,default: Date.now}
})

