//module.exports = ({ env }) => ({
//  defaultConnection: 'default',
//  connections: {
//    default: {
//      connector: 'mongoose',
//      settings: {
//        uri: env('DATABASE_URI' || ''),
//       host: env('DATABASE_HOST', '127.0.0.1'),
//        srv: env.bool('DATABASE_SRV', false),
//        srv: env.bool('DATABASE_SRV', true),
//        port: env.int('DATABASE_PORT', 27017),
//        database: env('DATABASE_NAME', ''),
//      },
//      options: {
//       authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
//        ssl: env.bool('DATABASE_SSL', true),
//      },
//    },
//  },
//})

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.jjnqd.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'wild-rider'),
        username: env('DATABASE_USERNAME', 'WebMasterWild'),
        password: env('DATABASE_PASSWORD', 'WildRider2021'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
