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
            {id:'c1',event:'e2',userName:'John',userComment:'This post is awesome'},
            {id:'c2',event:'e1',userName:'max',userComment:'This post is awefull'},
            {id:'c3',event:'e3',userName:'omid',userComment:'This post is nothing'},
        ];
        const data_filter = dummyList.filter( element => element.event === eventId)
        res.status(201).json({comments:data_filter}).send({message:'Sending Comment successful.'});

    }

}
export default handler;
