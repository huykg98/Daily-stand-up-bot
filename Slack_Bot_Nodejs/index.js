require('dotenv').config()
const schedule = require('node-schedule')
const express = require("express");
const app = express();
const DialogController = require('./controller/DialogController');
const ReminderController = require('./controller/ReminderController');
const ChannelController = require('./controller/ChannelController');

app.use(express.static("public"));

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});


ChannelController.addAllChannel() // Auto add all exist channel of slack to db when starting server
app.post("/open_dialog", DialogController.postDialogToSlackAPI)   // Request url for slash command
app.post("/dialog_handler", DialogController.handleDialogAction)  // Request url for interactivity

ReminderController.remind_submit_daily_report()
schedule.scheduleJob('0 0 3 * * 1-7', function(){   // Update remind time from db to server every day at 03:00AM
  ReminderController.remind_submit_daily_report()  
})

app.post("/add_channel", ChannelController.addChannelToDatabaseAuto) // Request url for Event Subcription






