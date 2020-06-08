import { Controller, Post, Body, Get, Delete, Param, Put } from '@nestjs/common';
import { PersonService } from './person.service';
import { Person } from './person.entity';

@Controller('person')
export class PersonController {

    constructor(private personService: PersonService) {}

    @Get()
    async getAllPersons(): Promise<Person[]> {
        return this.personService.getAll();
    }

    @Get(':id')
    async getPerson(@Param() params): Promise<Person> {
        return this.personService.get(params.id);
    }

    @Post('create')
    async createPerson(@Body() person: Person): Promise<any> {
        return this.personService.create(person);
    }

    @Put('update/:id')
    async updatePerson(@Param() id, @Body() person: Person): Promise<any> {
        person.id = id;
        return this.personService.update(person);
    }

    @Delete('delete/:id')
    async deletePerson(@Param() id): Promise<any> {
        return this.personService.delete(id);
    }
}
