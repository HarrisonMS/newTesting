const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/hobbits";
// make another change and deploy you know the drill but this time with a wipe of the node guys
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/hobbits.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  // heroku postgres
  production: {
    client: "pg", // npm i pg
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
