import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors, {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
  ],
});

app.register(appRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP Server running!");
  });
