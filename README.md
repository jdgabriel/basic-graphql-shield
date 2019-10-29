# Basic GraphQL Shield

This repository is just the result of a [graphql-shield](https://github.com/jdgabriel/basic-graphql-shield) library study

### How to use and test yourself

```
git clone https://github.com/jdgabriel/basic-graphql-shield.git
yarn install
```

```
yarn dev
```

### Shield of grahpql-shield

All authentication is done through functions that define the user and their access level, if used.

##### FILE: ./src/permission

```javascript
// Import shield
import { shield } from 'graphql-shield';

// Import any custon rules
import isAuthenticated from './isAuthenticated';

export default shield({
	Query: {
		hello: isAuthenticated
	}
});
```

##### FILE: ./src/permission/isAuthenticated

```javascript
// Import rule
import { rule } from 'graphql-shield';

export default rule()(async (parent, args, ctx, info) => {
	return ctx.user !== null;
});
```

## Licence MIT

Gabriel Duarte
