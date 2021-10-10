const url = require('url');

const myUrl = new URL('http://google.com:8080/hello.html?id=1234&status=active');


/* Get serialized URL
=========================== */
console.log(myUrl.href);
console.log(myUrl.toString());

/* Get Host (Root domain + port)
=========================== */
console.log(myUrl.host);

/* Get Host name (Root domain name)
=========================== */
console.log(myUrl.hostname);

/* Get Path (Next to Host)
=========================== */
console.log(myUrl.pathname);

/* Get Query Params (Search -> string)
   (searchParmas -> object)
=========================== */
console.log(myUrl.search);
console.log(myUrl.searchParams);

// Append and loop search Params
myUrl.searchParams.append('city', 'Pondicherry');
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`))