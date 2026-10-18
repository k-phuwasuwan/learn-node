import express from "express";

const app = express();
app.use(express.json());

const tasks = [
  { id: 1, title: "task 1", completed: false },
  { id: 2, title: "task 2", completed: false },
  { id: 3, title: "task 3", completed: false },
];

let nextId = 4;

app.get("/", (req, res) => {
  res.send("Welcome to Express server");
});

app.get("/about", (req, res) => {
  res.send("Welcome to about page");
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const title = req.body?.title;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      message: "กรุณาระบุ title เป็นข้อความที่ไม่ว่าง",
    });
  }

  const task = {
    id: nextId++,
    title: title.trim(),
    completed: false,
  };

  tasks.push(task);
  return res.status(201).json(task);
});

app.patch("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      message: "ไม่พบงานนี้",
    });
  }

  const completed = req.body?.completed;

  if (typeof completed !== "boolean") {
    return res.status(400).json({
      message: "completed ต้องเป็น true หรือ false",
    });
  }

  task.completed = completed;
  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "ไม่พบงานนี้",
    });
  }

  tasks.splice(index, 1);
  res.status(204).end();
});

app.use((req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

app.listen(3000, "127.0.0.1", () => {
  console.log("เปิด server http://127.0.0.1:3000");
});