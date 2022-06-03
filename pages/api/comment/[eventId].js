function handler(req, res) {
    const eventId = req.query.eventId;
    if (req.method==='POST'){
        const {userEmail,userName,userComment} = req.body;

        if(!userEmail || !userEmail.includes('@')|| !userName || !userName.trim()==='' || !userComment || !userComment.trim()===''){
            res.send(422).JSON({message: 'Invalid input'});
            return;
        }
    
        const newComment={
            id: new Date().toISOString(),
            eventId,userEmail,userName,userComment
        }
        console.log(newComment)

        res.status(201).send({message:'Sending Comment successful.'});

         
    }
    if(req.method==='GET'){
        const dummyList = [
            {id:'c1',userName:'John',userComment:'This post is awesome'},
            {id:'c2',userName:'max',userComment:'This post is awefull'},
        ];
        res.status(201).json({comments:dummyList}).send({message:'Sending Comment successful.'});

    }

}
export default handler;
