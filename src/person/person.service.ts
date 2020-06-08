import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonService {

    constructor(@InjectRepository(Person) private personsRepository: Repository<Person>) {

    }

    async getAll(): Promise<Person[]> {
        return await this.personsRepository.find();
    }

    async get(id: number): Promise<Person> {
        return await this.personsRepository.findOne(id);
    }

    async create(person: Person): Promise<Person> {
        return await this.personsRepository.save(person);
    }

    async update(person: Person): Promise<UpdateResult> {
        return await this.personsRepository.update(person.id, person);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.personsRepository.delete(id);
    }
}
