import { InputType, Field } from '@nestjs/graphql';

// interface for deleting a single university
// One field specifiying an id which is a number
@InputType()
export class DeleteUniversityInput {
  @Field()
  id: number;

  @Field()
  user: string;

  @Field()
  password: string;
}
