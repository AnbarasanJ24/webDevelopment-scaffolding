const fs = require('fs');
const path = require('path');

/* 
    In file system, we have both sync & async way, Async way will carry callback function
 */

/* Folder creation => Takes file name, optional parameter & call back as parameter
=========================== */
fs.mkdir(path.join(__dirname, '/learning'), {}, err => {
    if (err) throw err;
    console.log("Folder created!");
})

/* File created and write (Using it one more time will overwrite, 
    so use append in case of adding some more content)
    Takes file name, content & call back as parameter
=========================== */
const content = "Hello World!"
fs.writeFile(path.join(__dirname, '/learning', 'learning.txt'), content, err => {
    if (err) throw err;
    console.log("File created and written with test input");

    /* Appending content =>
    =========================== */
    const appendContent = "Welcome to learning Node.JS!";
    fs.appendFile(path.join(__dirname, 'learning', 'learning.txt'), appendContent, err => {
        if (err) throw err;
        console.log("Content appended");
    })
})


/* Read File => Takes file name, encoding & call back as parameter
=========================== */
fs.readFile(path.join(__dirname, '/learning', 'learning.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Data from file", data);
})

/* Rename File => Takes file name, new file name & call back as parameter
=========================== */
fs.rename(
    path.join(__dirname, '/learning', 'learning.txt'),
    path.join(__dirname, '/learning', 'learning1.txt'),
    (err) => {
        if (err) throw err;
        console.log("File Renamed");
    })



