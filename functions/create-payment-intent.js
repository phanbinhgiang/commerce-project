// domain/.netlify/functions/create-payment-intent

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  };
};
