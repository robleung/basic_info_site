const http = require("node:http");
const fs = require("node:fs");
const url = require("url");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/") {
    res.end(fs.readFileSync("index.html", "utf-8"));
  } else if (path === "/about") {
    res.end(fs.readFileSync("about.html", "utf-8"));
  } else if (path === "/contact-me") {
    res.end(fs.readFileSync("contact-me.html", "utf-8"));
  } else {
    res.end(fs.readFileSync("404.html", "utf-8"));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
