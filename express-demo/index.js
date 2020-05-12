const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found");
  console.log("here");
  res.send(course);
});

app.get("/api/posts/:year/:month", (req, res) => {
  //localhost:3000/api/posts/2018/1?sortBy=name
  //  res.send(req.params); // 2018,1
  res.send(req.query); // sortBy=name
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));