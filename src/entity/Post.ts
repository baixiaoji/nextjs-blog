import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column('varchar')
    title: string;
    @Column('text')
    content: string;

    constructor(attributes: Partial<Post>) {
        Object.assign(this, attributes);
    }
}
