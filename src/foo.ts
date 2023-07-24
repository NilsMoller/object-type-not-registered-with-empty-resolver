import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Foo {
  @Field()
  public bar: string;
}
