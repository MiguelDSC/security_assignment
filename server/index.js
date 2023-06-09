import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAIApi, Configuration } from "openai";
import csrf from "csurf";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3500;
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.disable("x-powered-by");

const configuration = new Configuration({
  apiKey: process.env.API_KEY_OPENAI,
});

const openai = new OpenAIApi(configuration);

app.get("/", csrfProtection, (req, res) => {
  res.send({ csrf: req.csrfToken() });
});

// app.post("/generate-text", parseForm, csrfProtection, async (req, res) => {
//   const description = req.body.description;

//   try {
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: `write a text about ${description}`,
//       temperature: 0.4,
//       max_tokens: 64,
//       top_p: 1,
//       frequency_penalty: 0,
//       presence_penalty: 0,
//     });

//     res.send(response.data.choices[0].text);
//   } catch (e) {
//     console.log(e);
//     res.sendStatus(503);
//   }
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
