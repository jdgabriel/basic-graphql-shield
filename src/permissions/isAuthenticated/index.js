import { rule } from 'graphql-shield';

export default rule()(async (parent, args, ctx, info) => {
	return ctx.user !== null;
});
