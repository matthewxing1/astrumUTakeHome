import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { University } from './models/university';
import { UniversitiesService } from './universities.service';
import { GetUniversityArgs } from './dto/args/get-user.args';
import { CreateUniversityInput } from './dto/input/create-university.input';
import { UpdateUniversityInput } from './dto/input/update-user.input';
import { DeleteUniversityInput } from './dto/input/delete-university.service';

@Resolver(() => University)
export class UniversitiesResolver {
  constructor(private readonly universitiesService: UniversitiesService) {}

  // per documentation, I believe this essentially an indicator that the server has started
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  // handler for the query of 'university' to fetch a single university based on an id
  @Query(() => University, { name: 'university', nullable: true })
  getUniversity(
    @Args() getUniversityArgs: GetUniversityArgs,
  ): Promise<University> {
    // run getUniversity service
    return this.universitiesService.getUniversity(getUniversityArgs);
  }

  // handler for the query of 'universities' to fetch a list of all universities, no arguments
  @Query(() => [University], { name: 'universities', nullable: 'items' })
  getAllUniversities(): Promise<University[]> {
    // run getAllUniversities service
    return this.universitiesService.getAllUniversities();
  }

  // handler for the mutation 'createUniversity' to create a single university based on a name/city/state, if user/password is authenticated
  @Mutation(() => University)
  async createUniversity(
    @Args('createUniversity') createUniversity: CreateUniversityInput,
  ): Promise<University | Error> {
    // if authorized, run the createUniversity service with data
    // if not authorized, return an Error
    return (await this.universitiesService.authService(createUniversity))
      ? this.universitiesService.createUniversity(createUniversity)
      : Error('createUniversity Error: invalid credentials');
  }

  // handler for the mutation 'updateUniversity' to update a single university based on a name/city/state, if user/password is authenticated
  @Mutation(() => University)
  async updateUniversity(
    @Args('updateUniversity') updateUniversity: UpdateUniversityInput,
  ): Promise<University | Error> {
    // if authorized, run the updateUniversity service
    // if not authorized, return an Error
    return (await this.universitiesService.authService(updateUniversity))
      ? this.universitiesService.updateUniversity(updateUniversity)
      : Error('updateUniversity Error: invalid credentials');
  }

  // handler for the mutation 'deleteUniversity' to delete a single university based on an id, if user/password is authenticated
  @Mutation(() => University)
  async deleteUniversity(
    @Args('deleteUniversity') deleteUniversity: DeleteUniversityInput,
  ): Promise<University | Error> {
    // if authorized, run the deleteUniversity service
    // if not authorized, return an Error
    return (await this.universitiesService.deleteUniversity(deleteUniversity))
      ? this.universitiesService.deleteUniversity(deleteUniversity)
      : Error('deleteUniversity Error: invalid credentials');
  }
}
