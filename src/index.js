import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema/prefectures'

const app = express()
const PORT = 3000
app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`running at ${PORT}`)
})