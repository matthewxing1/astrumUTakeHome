import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class State {
  @Field()
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class City {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => State)
  state: State;
}

@ObjectType()
export class University {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => City)
  city: City;
}
