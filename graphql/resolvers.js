const { Movies } = require('./db');

const resolvers = {
    Query: {
        movies: () => {
            return Movies.all();
        }
    }
}

module.exports = {
    resolvers: resolvers
}