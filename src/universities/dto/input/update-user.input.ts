import { Field, InputType } from '@nestjs/graphql';

// interface for updating a new university
// four fields consisting of an id, name, city, and state, all strings
// two fields consisting of a username and a password for verification
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
