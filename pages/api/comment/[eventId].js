import { MongoClient } from "mongodb";
async function handler(req, res) {
    const eventId = req.query.eventId;
    const client = await MongoClient.connect(
        "mongodb+srv://Omid:Omid0017553806*@nextevent.ko9e6vx.mongodb.net/events?retryWrites=true&w=majority"
      );
    if (req.method==='POST'){
        const {userEmail,userName,userComment} = req.body;

        if(!userEmail || !userEmail.includes('@')|| !userName || !userName.trim()==='' || !userComment || !userComment.trim()===''){
            res.send(422).JSON({message: 'Invalid input'});
            return;
        }
    
        const newComment={
            eventId,userEmail,userName,userComment
        }

        const db = client.db();
        await db.collection("comments").insertOne(newComment);
        
        res.status(201).send({message:'Sending Comment successful.'});

         
    }
    if(req.method==='GET'){
        const db = client.db();
        const dummyList = await db.collection("comments").find().sort({_id:-1}).toArray()
        const data_filter = dummyList.filter( element => element.eventId === eventId)
        res.status(201).json({comments:data_filter});

    }
    client.close();

}
export default handler;
