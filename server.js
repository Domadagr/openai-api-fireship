import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import OpenAI from "openai";
const openai = new OpenAI();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/domadagr', async (req, res) => {
    const prompt = req.body.prompt;

    const response = await openai.images.generate({
        prompt,
        n: 1,
        size: "1024x1024",
      });
      const image_url = response.data[0].url;
      res.send =({ image_url });
      console.log(image_url);

});

app.listen(8080, () => console.log('Domadagr dreams http://localhost:8080/domadagr'))