import type { ConnectRouter } from '@connectrpc/connect';
import { GreetService } from '../gen/proto/framework/greet/v1/greet_connect.js';
import { SayHelloRequest, SayHelloResponse } from '../gen/proto/framework/greet/v1/greet_pb.js';

export default (router: ConnectRouter) =>
  router.service(GreetService, {
    sayHello(req: SayHelloRequest) {
      const name = req.name || 'world';
      return new SayHelloResponse({ message: `Hello, ${name}` });
    },
  });
