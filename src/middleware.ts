// import { defineMiddleware } from "astro/middleware";

// export const onRequest = defineMiddleware(async (context, next) => {
//   const host = context.request.headers.get("host");

//   if (host === "pequenosmomentos.mx") {
//     const url = new URL(context.request.url);
//     url.hostname = "www.pequenosmomentos.mx";
//     return Response.redirect(url.toString(), 301);
//   }

//   return next();
// });
