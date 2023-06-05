import { ArgsType, Field } from '@nestjs/graphql';

// interface for deleting a single university
// One field specifiying an id which is a number
@ArgsType()
export class DeleteUniversityInput {
  @Field()
  id: number;
}
