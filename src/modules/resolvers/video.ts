import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Video {
  @Field()
  description: string;

  @Field()
  title: string;

  @Field()
  category: string;
}
