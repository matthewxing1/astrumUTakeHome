import { Module } from '@nestjs/common';
import { UniversitiesResolver } from './universities.resolver';
import { UniversitiesService } from './universities.service';

// module with the providers of UniversitiesResolver and UniversitiesService
@Module({
  providers: [UniversitiesResolver, UniversitiesService],
})
export class UniversitiesModule {}
