const fs = require("fs");

const dirs = [
  "controllers",
  "models",
  "views",
  "views/components",
  "public",
  "public/css",
  "public/js"
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
    console.log("Created:", d);
  }
});
