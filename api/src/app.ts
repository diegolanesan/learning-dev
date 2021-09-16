import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import {pingResolver} from './resolvers/ping';
import { ProductResolver } from './resolvers/productResolver';
import { buildSchema } from "type-graphql";



export const startServer = async () => {
    const app = express();
    const server = new ApolloServer({
        schema: await buildSchema({resolvers: [pingResolver, ProductResolver]}),
        context: ({req, res}) => ({req, res}),
    });
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    return app;
};




