const path = require('path');

// File used : Code\weather-app-node-js\reference\path_module.js

/* Get File Name => path_module.js
=========================== */
console.log(path.basename(__filename));

/* Get File Extension => js
=========================== */
console.log(path.extname(__filename));


/* Get All details about file  => Object with root, dir, base, ext, name
=========================== */
console.log(path.parse(__filename));
const result = {
    root: 'C:\\',
    dir: 'C:\\Learning Source Code\\weather-app-node-js\\reference',
    base: 'path_module.js',
    ext: '.js',
    name: 'path_module'
}

/* Create custom path like '..\test\index.html'  => ..\reference\folderName\fileName.ext
=========================== */
console.log(path.join(__dirname, 'folderName', 'fileName.ext'))








