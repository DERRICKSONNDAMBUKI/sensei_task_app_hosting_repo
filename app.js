const express = require("express");
app = express();
const cors = require("cors");
const pool = require("./database/db");
const path = require('path');
// middlewares
app.use(express.json());
app.use(cors());

// server front-end

app.use(express.static(path.join(__dirname,'build')))

// 
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
// routes
app.get("/", (req, res) => {
  try {
    res.send("<h1>Sensei Tasks Back-end</h1>");
  } catch (error) {
    console.error(error);
  }
});
// create task
app.post("/tasks", async (req, res) => {
  try {
    console.log(req.body);
    const { text, day, reminder } = req.body;
    const newTask = await pool.query(
      "INSERT INTO taskTable (text, day, reminder) VALUES($1, $2, $3) RETURNING *;",
      [text, day, reminder]
    );

    res.json(newTask.rows[0]);
    console.log("task created");
  } catch (error) {
    console.error(error);
  }
});

// get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM taskTable;");
    res.json(allTasks.rows);
    console.log("getting all tasks");
  } catch (error) {
    console.error(error);
  }
});

// delete one task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Tasks = await pool.query(
      "DELETE FROM taskTable WHERE id = $1;",
      [id]
    );
    res.json(`deleted task (${id}) successfully`);
    console.log(`deleted task (${id}) successfully`);
  } catch (error) {
    console.error(error.message);
  }
});

const server = app.listen(5000, "0.0.0.0", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`server is listening at http://${host}:${port}`);
});
