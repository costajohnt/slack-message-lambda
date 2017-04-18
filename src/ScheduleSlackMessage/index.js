import schedule from '../../schedule.json'

const request = require("request");

class ScheduleSlackMessage {
  message = () => {
    let presentName, pastName, futureName, person, rightNow, sDate, eDate, pastSlackId, presentSlackId;

    for(var i = 0; i < schedule.length; i++) {
        person = schedule[i];
        rightNow = new Date();
        sDate = new Date(person["startDate"]);
        eDate = new Date(person["endDate"]);

        if (rightNow >= sDate && rightNow <= eDate) {
            presentName = person["name"];
            pastName = schedule[i-1]["name"];
            futureName = schedule[i+1]["name"];
        }
    }

    let options = { method: 'POST',
      url: 'https://slack.com/api/chat.postMessage',
      headers: 
       { 'content-type': 'application/x-www-form-urlencoded' },
      form: 
       { token: process.env.SLACK_API_TOKEN,
         channel: '#tech-team',
         text: '@channel Good morning, team. ' + presentName + ' is on honeybadger duty. ' + pastName + ' was on last week, and ' + futureName + ' is up next. Have a great day!',
         link_names: 'true',
         username: 'Honeybadger Reminder Service',
         icon_emoji: ':honeybadger:' } 
       };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });

  }
}

export default ScheduleSlackMessage;








