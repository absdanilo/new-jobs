import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class updateFieldNullabeAvatar1595214931367
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('companies', 'avatar');
    await queryRunner.addColumn(
      'companies',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'companies',
      new TableColumn({
        name: 'avatar',
        type: 'varchar',
      }),
    );
  }
}
