import { connect } from "mongoose";
import { ContactRequestData } from "../../types/types"
import ContactModel from "./model";
export class MongoDbDataBase {
    private url : string = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.siie8.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;
    private isConnected : boolean = false;
    private static instance : MongoDbDataBase;
    constructor() {
        this.connection();
        // connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        //     console.log('Connected to database.')
        //     this.isConnected = true;
        // }).catch(() => {throw new Error('Connection Failed')});
    }
    private async connection(){
        try {
            await connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true});
            this.isConnected = true;
        } catch (error) {
            throw new Error('Internal server error')
        }
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