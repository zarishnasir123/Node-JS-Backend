const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error reading file", err);
    return;
  }

  const modifyFile = data.toUpperCase();
  fs.writeFile("output.txt", modifyFile, (err) => {
    if (err) {
      console.log("error writing file", err);
      return;
    }
    console.log("File written successfully to new file");

    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("error reading file", err);
        return;
      }
      console.log("new File data is", data);
    });
  });
});
