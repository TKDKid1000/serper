import { Serper } from "serper";

const client = new Serper({
  apiKey: process.env.SERPER_API_KEY,
});

// Search for dog shelters in the UK, return 10 results on the second page.

const images = await client.images("puppies");

for (let x = 1; x <= 5; x++) {
  const page = await images.toPage(x);
  console.log(`Page: ${x}`);
  page.images.forEach((img) => console.log("\t" + img.link));
}
