/**
 * Load Module Dependencies
 */
const express       = require("express");
const responseTime  = require("response-time");
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");
const debug         = require("debug")("gebeya:app");
const expressValidator = require("express-validator");

const logger = require("./lib/logger");
const authentication = require("./lib/authentication");
const config = require("./config");
const router = require("./routes");

// Connect To Mongodb
mongoose.connect(config.DB_URL);

mongoose.connection.on("connected", () =>{
  debug("connected to mongodb successfully")
 // console.log("database  connected successfully")
});

mongoose.connection.on("error", (err)=>{
  debug(err.message);

  process.exit(1);
})


let app = express();

// Attach Middlewares
app.use(responseTime());

app.use(authentication().unless({
  path: config.OPEN_ENDPOINTS
}))

app.use(expressValidator());

app.use(logger({logging: false}))

app.use(bodyParser.json())

// Attached app to the global router
router(app);


app.listen(config.HTTP_PORT, ()=>{
  debug(`Web Server Running on port ${config.HTTP_PORT}`)
})