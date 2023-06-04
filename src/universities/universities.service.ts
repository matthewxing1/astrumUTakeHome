import { Injectable } from '@nestjs/common';
import { University } from './models/university';

@Injectable()
export class UniversitiesService {
  private universities: University[] = [];

  public getAllUniversities(): University[] {

  }

  public getUniversity(): University {

  }

  public createUniversity(): University {

  }

  public updateUniversity(): University {

  }
}
