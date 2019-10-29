export default {
	Query: {
		hello: (_, args, ctx, info) => {
			return {
				id: 1,
				name: 'Gabriel'
			};
		}
	}
};
