import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetUniversityArgs {
  @Field()
  universityId: number;
}
