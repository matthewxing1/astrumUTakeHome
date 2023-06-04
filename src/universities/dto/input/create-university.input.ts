import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUniversityInput {
  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  state: string;
}
