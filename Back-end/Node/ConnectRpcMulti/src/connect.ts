import type { ConnectRouter } from '@connectrpc/connect';
import { EchoService } from '../gen/proto/framework/echo/v1/echo_connect.js';
import { PingRequest, PingResponse } from '../gen/proto/framework/echo/v1/echo_pb.js';
import { GreetService } from '../gen/proto/framework/greet/v1/greet_connect.js';
import { SayHelloRequest, SayHelloResponse } from '../gen/proto/framework/greet/v1/greet_pb.js';

export default (router: ConnectRouter) => {
  router.service(GreetService, {
    sayHello(req: SayHelloRequest) {
      const name = req.name || 'world';
      return new SayHelloResponse({ message: `Hello, ${name}` });
    },
  });
  router.service(EchoService, {
    ping(req: PingRequest) {
      const token = req.token || '';
      return new PingResponse({ pong: token ? `pong:${token}` : 'pong' });
    },
  });
};
