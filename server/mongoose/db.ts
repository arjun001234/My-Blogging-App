import { connect } from "mongoose";
import { ContactRequestData } from "../../types/types"
import ContactModel from "./model";

export class MongoDbDataBase {
    private url : string = 'mongodb+srv://Arjun:Terminator7541@cluster0.siie8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    private isConnected : boolean = false;
    private static instance : MongoDbDataBase;
    constructor() {
        connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
            console.log('Connected to database.')
            this.isConnected = true;
        }).catch((error) => {throw new Error('Connection Failed')});
    }
    static getInstance() {
        if(this.instance){
            return this.instance
        }
        this.instance = new MongoDbDataBase();
        return this.instance
    }
    sendContactRequest =  async (data: ContactRequestData) => {
        try {
            if(this.isConnected){
                const contact = new ContactModel(data);
                await contact.save();
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
}