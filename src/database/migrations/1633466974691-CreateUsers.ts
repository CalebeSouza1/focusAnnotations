import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1633466974691 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"annotations",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true, 
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "propose",
                        type: "varchar",
                    },
                    {
                        name: "day",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "period",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default:"now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "status",
                        type: "int",
                    }

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("annotations");
    }

}
