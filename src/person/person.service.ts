import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Person } from './person.entity';

import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@Injectable() @WebSocketGateway()
export class PersonService  {
    @WebSocketServer() server;

    constructor(@InjectRepository(Person) private personsRepository: Repository<Person>) {

    }
    
    async getAll(): Promise<Person[]> {
        const res = await this.personsRepository.find();
        const people = res.reverse();
        return people;
    }

    async get(id: number): Promise<Person> {
        return await this.personsRepository.findOne(id);
    }

    async create(person: Person): Promise<Person> {
        const p = await this.personsRepository.save(person);
        this.server.emit('new_person', p)
        return p;
    }

    async update(person: Person): Promise<UpdateResult> {
        return await this.personsRepository.update(person.id, person);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.personsRepository.delete(id);
    }
}
