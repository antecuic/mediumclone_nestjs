import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1670366207801 implements MigrationInterface {
  name = 'SeedDb1670366207801';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    await queryRunner.query(
      // password is mypass12
      `INSERT INTO users (username, email, password) VALUES ('ante-admin', 'admin@mail.com', '$2b$10$jdCAJ9fFwhM/NeS5THVH8.tVXmM7rkB1oXt0jPpe83cLba7alKtj6')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'First article description', 'This is article body', 'coffee,dragons', 1), ('second-article', 'Second article', 'Second article description', 'This is second article body', 'coffee,nestjs', 1)`,
    );
  }

  public async down(): Promise<void> {
    return;
  }
}
