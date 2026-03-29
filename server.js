import express from "express";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = path.join(__dirname, "pages");

const app = express();
app.use("/public", express.static("public"));

app.get("/", async (_, res) => {
  const indexPage = path.join(pages, "index.html");
  res.sendFile(indexPage);
});

app.get("/novo", async (_, res) => {
  const createPage = path.join(pages, "create.html");
  res.sendFile(createPage);
});

app.get("/:id/editar", async (_, res) => {
  const editPage = path.join(pages, "edit.html");
  res.sendFile(editPage);
});

app.use((_, res, next) => {
  const notFoundPage = path.join(pages, "not-found.html");
  res.status(404).sendFile(notFoundPage);
});

app.listen(8080, "0.0.0.0", () =>
  console.log("Server is running at http://localhost:8080/"),
);
