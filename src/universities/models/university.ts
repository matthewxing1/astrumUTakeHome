export class University {
  id: number;
  name: string;
  city: {
    id: number;
    name: string;
    state: {
      id: number;
      name: string;
    };
  };
}
