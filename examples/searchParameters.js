import { Serper } from "serper";

const serper = new Serper({
  apiKey: process.env.SERPER_API_KEY
});

// Search for dog shelters in the UK, return 10 results on the second page.
const results = await serper.search({
  q: "dog sheltrs",
  autocorrect: true,
  country: "uk",
  page: 2,
  num: 10 // Multiple of 10.
});

console.log(results);
