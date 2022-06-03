function handler(req, res) {
    if (req.method==='POST'){
        const userEmail = req.body.email;
        if(!userEmail || !userEmail.includes('@')){
            res.send(422).JSON({message: 'invalid email address.'});
            return;
        }
        
        console.log(userEmail);
        res.status(201).send({message:'SignUp successful.'});

         
    }

}
export default handler;
