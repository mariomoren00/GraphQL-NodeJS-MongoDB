import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

//Later
import schema from './graphql'
const app = express();

mongoose.connect('');
const db = mongoose.connection
db.on('error', () => console.log('Failed to connect to DB.'))
	.once('open', () => console.log('Connected to DB. '))


app.get('/', (req, res) => {
  res.send('Hello World..');
});

// GraphQL API
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(3000, () => {
  console.log('GraphQL server running at port 3000')
})
