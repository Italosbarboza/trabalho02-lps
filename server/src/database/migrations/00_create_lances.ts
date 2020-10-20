import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('lances', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('cpf').notNullable();
        table.string('whatsapp').notNullable();
        table.integer('lance').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('lances');
}