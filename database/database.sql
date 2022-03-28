CREATE DATABASE tasksDB;
CREATE TABLE taskTable(
  id SERIAL PRIMARY KEY,
  text VARCHAR(50),
  day VARCHAR,
  reminder BOOLEAN
);
-- SELECT
--   *
-- FROM
--   taskTable;
-- INSERT INTO
--   taskTable (text, day, reminder)
-- VALUES($ 1, $ 2, $ 3) RETURNING *;
-- SELECT
--   *
-- FROM
--   taskTable
-- WHERE
--   id = $ 1;
-- UPDATE
--   taskTable
-- SET
--   text = $ 2 day = $ 3
-- WHERE
--   id = $ 1;
-- DELETE FROM
--   taskTable
-- WHERE
--   id = $ 1;
INSERT INTO
  taskTable (text, day, reminder)
VALUES('Code js', 'Saturday at 05:27 a.m', True);
INSERT INTO
  tasktable (text, day, reminder)
VALUES
  (
    'Design shop',
    'Monday at 14:00H',
    True
  );
-- ALTER TABLE tasktable RENAME COLUMN id TO id;
  -- ALTER TABLE tasktable RENAME COLUMN text TO text;
  -- ALTER TABLE tasktable RENAME COLUMN day TO day;
  -- ALTER TABLE tasktable RENAME COLUMN reminder TO reminder;