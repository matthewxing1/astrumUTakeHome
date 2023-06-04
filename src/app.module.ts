import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UniversitiesModule } from './universities/universities.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    UniversitiesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
