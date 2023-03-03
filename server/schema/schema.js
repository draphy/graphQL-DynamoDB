const graphql = require("graphql");
const {
  authorPut,
  bookPut,
  authorsGet,
  authorGet,
  getAllBooksByAuthorId,
  booksGet,
  bookGetbyId,
  authorGetbyId,
} = require("../handlers");
const {
  GraphQLInt,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    Id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      async resolve(parent, args) {
        return await authorGet(parent.authorId);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    Id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return getAllBooksByAuthorId(parent.Id);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        const books = booksGet();
        return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        const authors = authorsGet();
        return authors;
      },
    },
    book: {
      type: BookType,
      args: { Id: { type: GraphQLID } },
      resolve(parent, args) {
        const book = bookGetbyId(args.Id);
        return book;
      },
    },
    author: {
      type: AuthorType,
      args: { Id: { type: GraphQLID } },
      resolve(parent, args) {
        const author = authorGetbyId(args.Id);
        return author;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        let author = {
          name: args.name,
          age: args.age,
        };
        return authorPut(author);
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        let book = {
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        };
        return bookPut(book);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
