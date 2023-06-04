import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { University } from './models/university';
import { UniversitiesService } from './universities.service';
import { GetUniversityArgs } from './dto/args/get-user.args';
import { CreateUniversityInput } from './dto/input/create-university.input';
import { UpdateUniversityInput } from './dto/input/update-user.input';

@Resolver(() => University)
export class UniversitiesResolver {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Query(() => University, { name: 'university', nullable: true })
  getUniversity(@Args() getUniversityArgs: GetUniversityArgs): University {
    return this.universitiesService.getUniversity();
  }

  @Query(() => [University], { name: 'universities', nullable: 'items' })
  getAllUniversities(): University[] {
    return this.universitiesService.getAllUniversities();
  }

  @Mutation(() => University)
  createUniversity(
    @Args('createUniversity') createUniversity: CreateUniversityInput,
  ): University {
    return this.universitiesService.createUniversity();
  }

  @Mutation(() => University)
  updateUniversity(
    @Args('updateUniversity') updateUniversity: UpdateUniversityInput,
  ): University {
    return this.universitiesService.updateUniversity();
  }
}
