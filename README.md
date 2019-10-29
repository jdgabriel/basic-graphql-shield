# Basic GraphQL Shield

This repository is just the result of a [graphql-shield](https://github.com/jdgabriel/basic-graphql-shield) library study

### How to use and test yourself

```
git clone https://github.com/jdgabriel/basic-graphql-shield.git
yarn install
yarn dev
```

### Shield of grahpql-shield

All authentication is done through functions that define the user and their access level, if used.

```javascript
export default shield({
	Query: {
		hello: isAuthenticated
	}
});
```
