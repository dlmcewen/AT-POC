// scripts/run-cypress-tests.js

const cypress = require('cypress')


return cypress.run({
  key: 'dc23c99b-f3d5-4440-b4e7-9ee3653d7c7d',
  record: true
})
.then((results) => {
	console.log(results)
	return
})