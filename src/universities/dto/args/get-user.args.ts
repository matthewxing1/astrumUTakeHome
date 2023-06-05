import { ArgsType, Field } from '@nestjs/graphql';

// interface for getting a single university
// One field specifiying an id which is a number
@ArgsType()
export class GetUniversityArgs {
  @Field()
  universityId: number;
}
