import { Resolver } from '@nestjs/graphql';
import Foo from './foo';

@Resolver(() => Foo)
export default class FooResolver {}
