const os = require('os');


/* Get Platform => win.32 (windows), darwin(Mac)
=========================== */
console.log(os.platform());


/* Get CPU Architecture => X64, X32
=========================== */
console.log(os.arch());


/* Get CPU Core Info => All core Info
=========================== */
console.log(os.cpus());


/* Get Free, Total Memory => 1512615936,8367693824
=========================== */
console.log(os.freemem());
console.log(os.totalmem());


/* Get Home dir => C:\Users\Anbarasan (System Path)
=========================== */
console.log(os.homedir());


/* Get uptime => 788019 sec
=========================== */
console.log(os.uptime());

