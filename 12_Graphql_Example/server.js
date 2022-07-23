const path = require('path');
const express = require('express');
// Đây là một phầm mềm trung gian đáp ứng truy vấn đồ họa
const { graphqlHTTP } = require('express-graphql');

const { loadFilesSync } = require('@graphql-tools/load-files');

const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));


const schema = makeExecutableSchema({
    typeDefs: [typesArray],
    resolvers: resolversArray,
});

// Chú ý: Dấu chấm than là những trường đó phải có



const app = express();

// Đây là hàm nhận một đối số để cấu hình các đồ họa sẽ phản hồi
app.use('/graphql', graphqlHTTP({
    schema: schema,
    // khi đặt graphiql=true thì cho phép truy vấn giao diện trên web
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Running GraphQL server...');
})