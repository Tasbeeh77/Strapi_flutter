module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84f5aff46cc0e8d32bd95320e8917447'),
  },
});
