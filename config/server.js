module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'edcb569638d7c94f897cab30b9f0817b'),
    },
  },
  // url:'https://7994-168-91-252-63.ngrok.io'
});
