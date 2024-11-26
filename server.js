import * as dotenv from 'dotenv';
dotenv.config();

import OpenAI from "openai";
const openai = new OpenAI();

const app = express();
app.use(cors());

const response = await openai.images.generate({
    model: "dall-e-2",
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  });
  image_url = response.data[0].url;
  console.log(image_url);