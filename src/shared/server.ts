import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import { buildSchema } from "type-graphql";
import { VideoResolver } from "../modules/resolvers/videoResolvers";
dotenv.config();
async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [VideoResolver],
  });
  const server = new ApolloServer({ schema });

  server.listen(process.env.PORT || 3000, console.log("server started"));
}

bootstrap();
