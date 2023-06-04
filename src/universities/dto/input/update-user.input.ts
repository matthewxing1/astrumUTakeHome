import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUniversityInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  cities: string[];

  @Field()
  states: string[];
}
