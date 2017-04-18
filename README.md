# slack-message-lambda
 The slack-message-lambda is a lambda function that helps keep track of who is on honeybadger duty.  This lambda is triggered by a schedule event.  It runs once per week on Mondays.  The function reads the HB duty schedule and outputs a message detailing who is on duty that week to the #tech-team channel

`npm install`

# Deploy

## Development

`SLS_DEBUG='*' serverless webpack invoke --function test` to test with serverless locally. You may need to set SLS_DEBUG: `export SLS_DEBUG='*'`

## Staging

1. `serverless deploy --stage staging --verbose`
1. Configure lambda: add any environment variables and values, adjust the timeout if needed (up to 5 minutes), enable a trigger for your function, add a test event (json).

## Production

1. `serverless deploy --stage production --verbose`
1. Configure lambda: add any environment variables and values, adjust the timeout if needed (up to 5 minutes), enable a trigger for your function, add a test event (json).
