# Hailcabs Coding Challenge

## Rules

- This assignment consists of 4 questions. All of them is provided with complete details, no questions are meant to be explained further. Still if you find trouble understanding the question, please contact your hiring manager.
- You are to select a 3 hour window in which you will be completely available to take the challenge. Please let your hiring manager know the exact 3 hour window, so that he/she can schedule the calendar invite for the coding challenge.
- Questions for the challenge will be sent exactly 15 mins before your challenge starts. You may use the internet to help you, but please avoid getting it solved with fellow developers!
- Please prepare your system in advance with following installations. Mysql or Postgresql, Nodejs, Vercel, or anything else you may need
- For the concepts / technologies you might not be aware of we are expecting you to research and solve in the same given time.
- All the submissions are supposed to be made via github
  - For all the repos that requires API and frontend please host them on vercel and use any free online database for deploying postgres or mysql. Please make sure you use free online service for everything
  - The challenge repo should contain folder like this `challenge1` `challenge2` and so on…
  - Any commits after the given time won’t be considered valid

**Happy coding!** 🥂

## Challenges

### 1st

Create a website using HTML & CSS no javascript interaction is required. The design is attached on the bottom.
Bonus Point if used Tailwind CSS.

### 2nd

Write a nestjs rest api

- Create an endpoint that stores following information
  - firstName
  - lastName
  - email
  - password
- Create an endpoint to to authenticate from the above stored information and responds with JWT
- Create and endpoint that checks if user is authorized then respond with current user’s information
- Create a health-check endpoint
- Create a endpoint that responds with weather information of given city, Use any public API for this. Make sure that the responses are cached

### 3rd

Given is the table schema

| **`users`** | **`cabs`** | **`drivers`** | **`trips`** |
| :---------: | :--------: | :-----------: | :---------: |
|     id      |     id     |      id       |     id      |
|    name     |   userId   |     name      |    cabId    |
|    city     | regNumber  | licenseNumber |  driverId   |
|    email    |  isActive  |               |    from     |
|  password   | createdAt  |               |     to      |
|  isActive   | updatedAt  |               |  distance   |
|  createdAt  | deletedAt  |               |   fromLat   |
|  updatedAt  |            |               |   fromLng   |
|  deletedAt  |            |               |    toLat    |
|             |            |               |    toLng    |
|             |            |               |     far     |
|             |            |               |   amount    |
|             |            |               |     tax     |

#### Question 1

Write a single query in mysql that fetches summary for all users that includes following data for a given date.

- User name
- Revenue
- Distance traveled
- Number of cabs that generated revenue, (there could be some cabs that didn’t run at that day, do not include them)
- Total trips done
- Most active cab (Get the detail of the most active cab)

#### Question 2

On which columns would you create indexes to make your query run faster?

### 4th

Let’s say we want to print numbers from 0 - 4 we can use for loop to print all of them! But we want them to print with a delay of n seconds where n is the current iteration for example in 1st iteration the delay is 0 seconds and in 2nd it’s 1 seconds and in 3rd it’s 2 seconds and so on..
The following code doesn’t seem to work as expected, please find the bug and help fix it with a brief explanation

```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```
