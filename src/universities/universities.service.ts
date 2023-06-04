import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { University } from './models/university';
import { CreateUniversityInput } from './dto/input/create-university.input';
import { GetUniversityArgs } from './dto/args/get-user.args';
import { UpdateUniversityInput } from './dto/input/update-user.input';

@Injectable()
export class UniversitiesService {
  private universities: University[] = [];

  public async getAllUniversities(): Promise<University[]> {
    try {
      const data = await fs.promises.readFile('universities.json', 'utf8');
      const parsedData = JSON.parse(data);
      return parsedData.universities;
    } catch (err) {
      return err;
    }
  }

  public async getUniversity(
    universityId: GetUniversityArgs,
  ): Promise<University> {
    try {
      const data = await fs.promises.readFile('universities.json', 'utf8');
      const parsedData = JSON.parse(data);
      for (const university of parsedData.universities) {
        if (university.id === universityId.universityId) {
          return university;
        }
      }
      throw new Error(
        `getUniversity Error: No university found for id: ${universityId.universityId}`,
      );
    } catch (err) {
      return err;
    }
  }

  public async createUniversity(
    createUniversity: CreateUniversityInput,
  ): Promise<University> {
    try {
      const data = await fs.promises.readFile('universities.json', 'utf8');
      const parsedData = JSON.parse(data);
      const newUniversity: University = {
        id: parsedData.universities.length + 1,
        name: createUniversity.name,
        city: {
          id: 1,
          name: createUniversity.city,
          state: {
            id: 1,
            name: createUniversity.state,
          },
        },
      };
      parsedData.universities.push(newUniversity);
      fs.promises.writeFile('universities.json', JSON.stringify(parsedData));
      return newUniversity;
    } catch (err) {
      return err;
    }
  }

  public async updateUniversity(
    updateData: UpdateUniversityInput,
  ): Promise<University> {
    try {
      const data = await fs.promises.readFile('universities.json', 'utf8');
      const parsedData = JSON.parse(data);
      for (const university of parsedData.universities) {
        if (university.id === updateData.id) {
          university.name = updateData.name;
          university.city.name = updateData.city;
          university.city.state.name = updateData.name;
          fs.promises.writeFile(
            'universities.json',
            JSON.stringify(parsedData),
          );
          return university;
        }
      }
      throw new Error(
        `updateUniversity Error: No university found for id: ${updateData.id}`,
      );
    } catch (err) {
      return err;
    }
  }
}
