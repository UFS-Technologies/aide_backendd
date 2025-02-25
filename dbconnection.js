
var mysql = require("mysql2");
var connection = mysql.createPool({
   // host: "UFSTECH6",
   // host:"UFSTECH6",
   // user: "ufstechnologies",
   // password: "UFStech@123",
   // database: "Avis",

   // host: "localhost",
   // user: "ufstechnologies",
   // password: "UFStech@1234",
   // database: "Avis",

   // host: "131.153.48.162",
   // user: "ufstechnologies",
   // password: "ufstechnologies@555",
   // database: "test_2",
   // port:'3306',
   // multipleStatements: true

   // host: "localhost",
   // user: "root",
   // password: "root",
   // database: "fortune",

   // host:"localhost",
   // user: "root",
   // password: "UFStech@123",
   // database: "matglober03072023",


   host:"localhost",
   user: "root",
   password: "root",
   database: "aide29112023",
   
   // database: "aidetest20",
   // database: "matglober28072023", original

   // database: "matglober31072023",

   
});
module.exports = connection;

 