const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(
    '\x1b[36m%s\x1b[0m',
    `\nServer berjalan pada ${server.info.uri}\n`,
  );
};

init();
