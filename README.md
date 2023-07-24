# Minimum reproduction repository for GraphQL ObjectTypes not being registered if they are not included in a query or mutation
Steps taken:
1. Globally install the Nest CLI (v10.1.10)
2. Create a new Nest project: `nest new`
3. Add the GraphQL packages: `npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql`
4. Import the `GraphQLModule` in the `AppModule`
5. Create a healthcheck resolver (there must be at least one query)
6. Create the `Foo` ObjectType and a `FooResolver` resolver
7. Run the app to generate the schema
8. Observe that the schema does not include the `Foo` type
