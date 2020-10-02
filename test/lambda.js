// const AWSXRay = require("aws-xray-sdk-core");
// const AWS = AWSXRay.captureAWS(require("aws-sdk"));

// // Create client outside of handler to reuse
// const lambda = new AWS.Lambda();

// // Handler
// exports.handler = async function (event, context) {
//   event.Records.forEach((record) => {
//     console.log(record.body);
//   });
//   console.log("## ENVIRONMENT VARIABLES: " + serialize(process.env));
//   console.log("## CONTEXT: " + serialize(context));
//   console.log("## EVENT: " + serialize(event));

//   return getAccountSettings();
// };

// // Use SDK client
// var getAccountSettings = function () {
//   return lambda.getAccountSettings().promise();
// };

// var serialize = function (object) {
//   return JSON.stringify(object, null, 2);
// };

"use strict";
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  }; // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
