module.exports = {
  host: '127.0.0.1',
  port: '5433',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  dialect: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
