import { Person } from './person.entity';

describe('PersonEntity', () => {
  it('should be defined', () => {
    expect(new Person()).toBeDefined();
  });
});
