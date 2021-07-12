// https://github.com/hapijs/hapi/blob/master/API.md#-await-serverinjectoptions
import { Request, ResponseToolkit, Server, ServerRoute } from "@hapi/hapi";

const server = new Server({
    port: 8000,
});

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler(request, h) {
        return 'Success!';
    }
};

server.route(serverRoute);
server.start();

server.inject('/').then(res => console.log(res.result));

declare module '@hapi/hapi' {
    interface ApplicationState {
        injectState?: number | undefined;
    }
}

server.inject({
    auth: {
        strategy: 'test',
        credentials: {
            user: {
                a: 1,
            },
        },
    },
    url: "test",
    app: {
        injectState: 1
    }
});
