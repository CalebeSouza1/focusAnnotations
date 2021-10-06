import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from "uuid";


@Entity("annotations")
class User {

    @PrimaryColumn()
    readonly id: string;
    
    @Column()
    description: string;

    @Column()
    propose: string;

    @Column()
    day: Date;
    
    @Column()
    period: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    @Column()
    status: boolean;

    constructor(){
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
