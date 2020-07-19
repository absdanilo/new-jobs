import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCandidate1595107177988 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'candidates',
          columns: [
            {
              name: 'id',
              type: 'integer',
              isPrimary: true,
              isGenerated: true
            },
            {
              name: 'occupation_area',
              type: 'integer'
            },
            {
              name: 'name',
              type: 'varchar'
            },
            {
              name: 'email',
              type: 'varchar',
              isUnique: true
            },
            {
              name: 'last_job',
              type: 'varchar',
            },
            {
              name: 'whatsapp',
              type: 'varchar'
            },
            {
              name: 'linkedin',
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
            },
          ]
        })
      );

      await queryRunner.createForeignKey(
        'candidates',
        new TableForeignKey({
          name: 'OccupationAreaCandidate',
          columnNames: ['occupation_area'],
          referencedColumnNames: ['id'],
          referencedTableName: 'occupations',
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('candidates', 'OccupationAreaCandidate');
      await queryRunner.dropTable('candidates');
    }

}
