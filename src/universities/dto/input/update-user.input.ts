import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUniversityInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  user: string;

  @Field()
  password: string;
}
