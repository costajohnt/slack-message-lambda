import ScheduleSlackMessage from './ScheduleSlackMessage';

'use strict';
require('dotenv').config();

function entry(event, context, callback) {
  const hb = new ScheduleSlackMessage();
  hb.message()
}

function test() {
  const hb = new ScheduleSlackMessage();
  hb.message()
}

module.exports = {
  entry,
  test,
};
