import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.send(422).JSON({ message: "invalid email address." });
      return;
    }
    const client = await MongoClient.connect(
      "mongodb+srv://Omid:Omid0017553806*@nextevent.ko9e6vx.mongodb.net/newsletter?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("emails").insertOne({ email: userEmail });
    client.close();
    res.status(201).send({ message: "SignUp successful." });
  }
}
export default handler;
