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
  @Mutation(() => Video)
  async addVideo(@Arg("videoInput") videoInput: VideoInput) {
    const video = await videoSchema.create(videoInput);
    return video;
  }

  @Query(() => [Video])
  async videos() {
    const videos = await videoSchema.find();
    return videos;
  }
}
