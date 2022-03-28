const Pool = require("pg").Pool;

const pool = new Pool({
  user: "zsvnjlabxzfxuz",
  password: "31735e27702e8c04064aa29ed019dca39cba30d6d67f0f65174e166554786d3e",
  host: "ec2-34-231-63-30.compute-1.amazonaws.com",
  port: 5432,
  database: "deeodf263s05np",
});
module.exports = pool;