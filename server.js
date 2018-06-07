const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();
const schema = require('./schema.js');

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(7474, () =>{
    console.log('server is runing on port 7474');
});