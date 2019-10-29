import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

export const typeDefs = mergeTypes(
	fileLoader(path.join(__dirname, './**/*.gql'), { recursive: true }),
	{ all: true }
);

export const resolvers = mergeResolvers(
	fileLoader(path.join(__dirname, './**/*.js'), { recursive: true }),
	{ all: true }
);
