if (process.env.NODE_ENV === 'test'){
  module.exports = require('./test/config');
  return;
}

module.exports = {
  mongo_url: process.env.MONGO_URL || 'mongodb://localhost:27017/gtfs',
  agencies: [
    {
      agency_key: 'nmb',
      // Change path
      path: '/Users/OrElm/gtfs',
      exclude: [
        'shapes', 'calendar', 'translations'
      ]
    }
  ]
};
