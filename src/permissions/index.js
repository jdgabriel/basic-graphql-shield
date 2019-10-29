import { shield } from 'graphql-shield';

import isAuthenticated from './isAuthenticated';

export default shield({
	Query: {
		hello: isAuthenticated
	}
});
