const { table } = require("../dbConfig");

exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    // id: primary key, unique
    table.increments(); 
    // VIN column, unique, not null
    table.string('VIN', 128).unique().notNullable(); 
    //make
    table.string('Model', 128).notNullable(); 
    //model
    table.string('Make', 128).notNullable(); 
    //mileage
    table.integer('Mileage'); 
    //transmission type
    table.string('Transmission type'); 
    //title
    table.string('Title');
  }); 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars'); 
};
