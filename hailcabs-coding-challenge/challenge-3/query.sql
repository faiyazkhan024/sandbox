-- Question 1 - MySQL Query: To fetch the summary for all users based on the given table schema and a specific date, you can use the following query:


SELECT
  u.name AS UserName,
  SUM(t.amount) AS Revenue,
  SUM(t.distance) AS DistanceTraveled,
  COUNT(DISTINCT t.cabId) AS CabCount,
  COUNT(t.id) AS TotalTrips,
  (
    SELECT
      c.regNumber
    FROM
      cabs c
      JOIN trips tr ON c.id = tr.cabId
    WHERE
      DATE(tr.from) = 'YYYY-MM-DD'
    GROUP BY
      c.id
    ORDER BY
      COUNT(tr.id) DESC
    LIMIT 1
  ) AS MostActiveCab
FROM
  users u
  JOIN trips t ON u.id = t.userId
WHERE
  DATE(t.from) = 'YYYY-MM-DD'
GROUP BY
  u.id;

/* 
=> Replace 'YYYY-MM-DD' with the specific date you want to fetch the summary for. This query joins the users and trips tables and calculates the required summary information. It also includes a sub-query to find the most active cab for that date.
*/

/*
Question 2 - Indexes: To make the query run faster, you can consider creating indexes on the following columns:

* For the users table: id column (primary key)
* For the trips table: userId, from, cabId columns
* For the cabs table: id column (primary key)

=> Creating indexes on these columns can improve the performance of the query by enabling faster data retrieval and join operations. However, the choice of indexes may vary depending on the specific data distribution and query patterns in your application. It's recommended to analyze the database usage and performance characteristics to determine the most effective indexes for your scenario.
*/