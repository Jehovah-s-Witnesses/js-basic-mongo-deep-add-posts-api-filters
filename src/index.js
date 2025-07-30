import { server } from './server.js';
import { connectToMongoose } from './initializers/connectToMongoose.js';
import { MONGO_CONNECTION_STRING } from './constants/db.js';

await connectToMongoose(MONGO_CONNECTION_STRING);
await server.listen({
  port: 4043,
});
server.log.info(
  'Started, you can check swagger docs on http://localhost:4043/documentation',
);
