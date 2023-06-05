import { InputType, Field } from '@nestjs/graphql';

// interface for creating a new university
// three fields consisting of a name, city, and state, all strings
// two fields consisting of a username and a password for verification
@InputType()
export class CreateUniversityInput {
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
