// import { TimeoutError } from "./errors";
// import fetch from "isomorphic-unfetch";

// const BASE_PATH = "https://google.serper.dev";

// export const createRequest = (
//   path: string,
//   headers: Headers,
//   body: BodyInit,
//   timeout: number
// ) => {
//   return new Promise((res, rej) =
//   const controller = new AbortController();
//   const timeoutId = setTimeout(() => {

//     controller.abort();
//   }, timeout);
// };

// export const createRequest = (
//   path: string,
//   headers: OutgoingHttpHeaders,
//   body: BodyInit,
//   timeout: number,
//   maxRedirects: number
// ) => {
//   return new Promise((res, rej) => {
//     const timer = setTimeout(() => {
//       rej(new TimeoutError());
//       request.destroy();
//     }, timeout);
//     const request = https.request(
//       {
//         hostname: HOSTNAME,
//         path,
//         method: "POST",
//         headers
//       },
//       async (response) => {
//         if ([301, 302].includes(response.statusCode || 500) && maxRedirects !== 0) {
//           if (timer) clearTimeout(timer);
//           return await createRequest(
//             response.headers.location || path,
//             headers,
//             body,
//             timeout,
//             maxRedirects - 1
//           );
//         } else if (maxRedirects === 0) {

//         }

//         const data: Uint8Array[] = [];

//         response.on("data", (chunk) => {
//           data.push(chunk);
//         });

//         response
//           .on("end", () => {
//             try {
//               if (response.statusCode === 200) {
//                 res(JSON.parse(Buffer.concat(data).toString()));
//               } else {
//                 rej(data);
//               }
//             } catch (err) {
//               rej(err);
//             } finally {
//               if (timer) clearTimeout(timer);
//             }
//           })
//           .on("error", (err) => {
//             rej(err);
//             if (timer) clearTimeout(timer);
//           });
//       }
//     );
//     request.write(body);
//     request.end();
//   });
// };
