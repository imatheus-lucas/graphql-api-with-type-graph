import { Arg, Field, InputType, Mutation, Resolver, Query } from "type-graphql";
import { Video } from "./video";
import videoSchema from "./videoSchema";
import "../../config/mongo";

@InputType()
class VideoInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  category: string;
}

@Resolver()
export class VideoResolver {
  /*O type Mutation serve para definir o contrato de
   manipulação de dados. A funcionalidade dele é comparável com a 
   dos verbos POST, PUT, PATCH e DELETE de APIs REST.
   */

  @Mutation(() => Video)
  async addVideo(@Arg("videoInput") videoInput: VideoInput) {
    const video = await videoSchema.create(videoInput);
    return video;
  }

  /*
  O type Query serve para definir o contrato de consulta de dados. 
  A funcionalidade dele é comparável com o verbo GET de APIs REST. 
  */
  @Query(() => [Video])
  async videos() {
    const videos = await videoSchema.find();
    return videos;
  }
}
