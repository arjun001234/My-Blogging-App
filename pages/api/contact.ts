import { NextApiHandler } from "next";
import { MongoDbDataBase } from "../../server/mongoose/db";
import { ContactApiReqType, ContactRequestData } from "../../types/types";

const db = MongoDbDataBase.getInstance();

const handler : NextApiHandler = (req:ContactApiReqType,res) => {
    if(req.method === 'POST'){
    const name = req.body.name;
    const email = req.body.email;
    const comment = req.body.comment;
    if(!name || !email || !comment){
        throw new Error('All fields are required.')
    }
    const data : ContactRequestData = {
        name,
        email,
        comment
    }
    try {
        db.sendContactRequest(data);
        res.status(201).send({
            message: 'Successful',
            data: data
        })
    } catch (error) {
        res.status(400).send({
            message: error.message,
            data: data
        })
    }
}
}

export default handler;