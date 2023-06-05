import { Field, ObjectType } from '@nestjs/graphql';

// specifiying the State interface
// two fields, an id and a name
@ObjectType()
export class State {
  @Field()
  id: number;

  @Field()
  name: string;
}

// specifiying the City interface
// two fields, an id and a name
// one field indicating a State
@ObjectType()
export class City {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => State)
  state: State;
}

// specifiying the University interface
// two fields, an id and a name
// one field indicating a City
@ObjectType()
export class University {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field(() => City)
  city: City;
}
