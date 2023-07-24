import { Query, Resolver } from '@nestjs/graphql';

// At least one query must be provided, otherwise it throws a Schema generation error. https://stackoverflow.com/a/64106012/10806063
@Resolver()
export default class HealthcheckResolver {
  @Query(() => String)
  public healthCheck(): string {
    return 'OK';
  }
}
