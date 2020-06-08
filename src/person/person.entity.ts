import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column('date')
    birthday: Date;

    @Column({
        type: 'boolean',
        default: false
    })
    isActive: boolean;
}
