

var http = require('http');
var server = http.Server(app);
var socketIO = require('socket.io');
var io = socketIO(server);

const port = process.env.PORT || 3510;
// process.env.SENDGRID_API_KEY = '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';//docs

// process.env.SENDGRID_API_KEY = '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';//celin
// process.env.SENDGRID_API_KEY = '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'; //info
process.env.SENDGRID_API_KEY = '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';



var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var multer = require('multer');
var multerupload = multer({ dest: 'fileprint/' })
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");
const jwt = require('./helpers//jwt');
var routes = require("./routes/index");
const errorHandler = require('./helpers/error-handler');
var Login = require("./routes/Login");
var User_Details = require('./routes/User_Details');
var Country = require('./routes//Country');
var Course = require('./routes//Course');
var Course_Intake = require('./routes//Course_Intake');
var Document = require('./routes//Document');
var Duration = require('./routes//Duration');
var Intake = require('./routes//Intake');
var Internship = require('./routes//Internship');
var Level_Detail = require('./routes//Level_Detail');
var Student = require('./routes//Student');
var Student_Document = require('./routes//Student_Document');
var Student_Message = require('./routes//Student_Message');
var Student_Status = require('./routes//Student_Status');
var Subject = require('./routes//Subject');
var Remarks= require('./routes//Remarks');

var University = require('./routes//University');
var Public_Data = require('./routes//Public_Data');
var Account_Group = require('./routes//Account_Group');
var Client_Accounts = require('./routes//Client_Accounts');
var Agent = require('./routes//Agent');
var Department = require('./routes//Department');
var Department_Status = require('./routes//Department_Status');
var Branch = require('./routes//Branch');
var Enquiry_Source = require('./routes//Enquiry_Source');
var Fees = require('./routes//Fees');
var User_Role=require('./routes//User_Role');
var Company=require('./routes//Company');
var Sub_Section=require('./routes//Sub_Section');
var Check_List=require('./routes//Check_List');
var Agent_Details=require('./routes//Agent_Details');
var Task=require('./routes//Task');
var Application_Status=require('./routes//Application_Status');
var Application_Group=require('./routes//Application_Group');
var Accounts = require('./routes//Accounts');
var Class = require('./routes//Class');
var Notes = require('./routes//Notes');
var Chat_Window = require('./routes//Chat_Window');
var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);
app.use("/Login", Login);

app.use('/Public_Data',Public_Data);
app.use('/Account_Group',Account_Group);
app.use('/Client_Accounts',Client_Accounts);
app.use('/Agent',Agent);

app.use(jwt());
//app.use(SESClient)
app.use('/User_Details',User_Details);
app.use('/Country',Country);
app.use('/Course',Course);
app.use('/Course_Intake',Course_Intake);
app.use('/Document',Document);
app.use('/Duration',Duration);
app.use('/Intake',Intake);
app.use('/Internship',Internship);
app.use('/Level_Detail',Level_Detail);
app.use('/Student',Student);
app.use('/Student_Document',Student_Document);
app.use('/Student_Message',Student_Message);
app.use('/Student_Status',Student_Status);
app.use('/Subject',Subject);
app.use('/Remarks',Remarks);
app.use('/Enquiry_Source',Enquiry_Source);
app.use('/University',University);
app.use('/Department',Department);
app.use('/Department_Status',Department_Status);
app.use('/Branch',Branch);
app.use('/Fees',Fees);
app.use('/User_Role',User_Role);
app.use('/Company',Company);
app.use('/Sub_Section',Sub_Section);
app.use('/Check_List',Check_List);
app.use('/Agent_Details',Agent_Details);
app.use('/Task',Task);
app.use('/Application_Status',Application_Status);
app.use('/Application_Group',Application_Group);
app.use('/Accounts',Accounts);
app.use('/Class',Class);
app.use('/Notes',Notes);
app.use('/Chat_Window',Chat_Window);
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
 
});
// if (app.get("env") === "development") {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render("error", {
//       message: err.message,
//       error: err
//     });
//   });
// }

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render("error", {
//     message: err.message,
//     error: {}
//   });
// });

io.on('connection', (socket) => {
  socket.on('new-message', (message) => {
    //sio.emit(message);
    io.emit('new-message', message);
  });
});

server.listen(port, () => {
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
module.exports = app;
