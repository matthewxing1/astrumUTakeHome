import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUniversityInput {
  @Field()
  name: string;

  @Field()
  cities: string[];

  @Field()
  states: string[];
}
