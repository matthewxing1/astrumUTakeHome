import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UniversitiesModule } from './universities/universities.module';

// module with v11 compatibility with Apollo Driver, and the UniversitiesModule
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UniversitiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
