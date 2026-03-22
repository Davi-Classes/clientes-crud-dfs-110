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

app.listen(8080, "0.0.0.0", () =>
  console.log("Server is running at http://localhost:8080/"),
);
