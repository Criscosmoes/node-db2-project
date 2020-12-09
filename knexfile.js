// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    }, 
    useNullAsDefault: true, 
    // allow us to go back and forth through the data base evolutions
    migrations: {
      directory: './data/migrations', 
    }, 
    seeds: {
      // populate with mock data
      directory: './data/seeds', 
    }
  },

  staging: {
  },

  production: {

  }

};
