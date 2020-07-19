import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateJobs1595177342718 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'jobs',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isGenerated: true,
              isPrimary: true
            },
            {
              name: 'company_id',
              type: 'integer',
            },
            {
              name: 'occupation_area',
              type: 'integer'
            },
            {
              name: 'title',
              type: 'varchar'
            },
            {
              name: 'description',
              type: 'varchar'
            },
            {
              name: 'salary',
              type: 'decimal'
            },
            {
              name: 'job_model',
              type: 'varchar'
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            }
          ]
        })
      )

      await queryRunner.createForeignKey(
        'jobs',
        new TableForeignKey({
          name: 'CompanyJobs',
          columnNames: ['company_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'companies',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        })
      )

      await queryRunner.createForeignKey(
        'jobs',
        new TableForeignKey({
          name: 'OccupationAreaJob',
          columnNames: ['occupation_area'],
          referencedColumnNames: ['id'],
          referencedTableName: 'occupations',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('jobs', 'OccupationAreaJob');
      await queryRunner.dropForeignKey('jobs', 'CompanyJobs');
      await queryRunner.dropTable('jobs');
    }

}
