import { ApolloServer } from 'apollo-server';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';

import permissions from './permissions';
import { typeDefs, resolvers } from './graphql';

const schema = applyMiddleware(
	makeExecutableSchema({
		typeDefs,
		resolvers
	}),
	permissions
);

const server = new ApolloServer({
	schema,
	cors: {
		origin: '*',
		methods: 'GET,HEAD,POST'
	},
	context: () => {
		return {
			user: null
		};
	}
});

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
