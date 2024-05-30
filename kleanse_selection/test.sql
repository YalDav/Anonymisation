CREATE TEMP TABLE Example
(
  x INT64,
  y STRING
);

INSERT INTO Example
VALUES (5, 'foo');

INSERT INTO Example
VALUES (6, 'bar');

CREATE TEMP TABLE input_data
(
  x INT64,
  y STRING
);

INSERT INTO input_data
VALUES (5, 'foo');

INSERT INTO input_data
VALUES (6, 'bar');



ASSERT EXISTS (
  SELECT x
  FROM Example
  WHERE x NOT IN (SELECT x FROM input_data)
);