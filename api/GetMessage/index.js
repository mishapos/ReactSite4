module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello from the React Site 4 API: " + (new Date()).ToString() },
  };
};
