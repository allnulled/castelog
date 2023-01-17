const fs = require("fs");

const counter = JSON.parse(fs.readFileSync(__dirname + "/counter.json", "utf8"));
counter.count++;
fs.writeFileSync(__dirname + "/counter.json", JSON.stringify(counter), "utf8");