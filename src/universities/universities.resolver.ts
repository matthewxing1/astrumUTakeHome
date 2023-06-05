import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { University } from './models/university';
import { UniversitiesService } from './universities.service';
import { GetUniversityArgs } from './dto/args/get-user.args';
import { CreateUniversityInput } from './dto/input/create-university.input';
import { UpdateUniversityInput } from './dto/input/update-user.input';

@Resolver(() => University)
export class UniversitiesResolver {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => University, { name: 'university', nullable: true })
  getUniversity(
    @Args() getUniversityArgs: GetUniversityArgs,
  ): Promise<University> {
    return this.universitiesService.getUniversity(getUniversityArgs);
  }

  @Query(() => [University], { name: 'universities', nullable: 'items' })
  getAllUniversities(): Promise<University[]> {
    return this.universitiesService.getAllUniversities();
  }

  @Mutation(() => University)
  async createUniversity(
    @Args('createUniversity') createUniversity: CreateUniversityInput,
  ): Promise<University | Error> {
    return (await this.universitiesService.authService(createUniversity))
      ? this.universitiesService.createUniversity(createUniversity)
      : Error('createUniversity Error: invalid credentials');
  }

  @Mutation(() => University)
  async updateUniversity(
    @Args('updateUniversity') updateUniversity: UpdateUniversityInput,
  ): Promise<University | Error> {
    return (await this.universitiesService.authService(updateUniversity))
      ? this.universitiesService.updateUniversity(updateUniversity)
      : Error('updateUniversity Error: invalid credentials');
  }
}

