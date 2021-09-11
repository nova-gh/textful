// db connection
import { dbConnect } from "../../lib/dbConnect";
import { Note } from "../../model/Note";
import * as randomstring from "randomstring";
export default async (req, res) => {
  // call db connection
  await dbConnect();

  // only listen to POST reqs
  if (req.method === "POST") {
    // we use randomstring libary to genrate slugs
    const slug = randomstring.generate({
      length: 6,
      charset: "alphabetic",
    });
    // create Note from model from req/res
    const note = await Note.create({
      note: req.body.note,
      slug,
      // we use randomstring libary to genrate slugs
    });
    res.status(200).json(note);
  } else {
    throw new Error("HTTP method not supported in this endpoint!");
  }
};
