import { Serper } from "serper";

const serper = new Serper({
  apiKey: process.env.SERPER_API_KEY
});

const results = await serper.search("search terms");

console.log(results);
