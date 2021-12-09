module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e6142a40af38a153d9c7a60fd3ab1756'),
  },
});
