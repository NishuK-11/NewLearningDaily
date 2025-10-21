import { quotes, users } from "./fakedb.js";
const resolvers = {
  Query: {
    users: () => users,
    user:(_,{id})=> users.find((user)=> user.id === id),
    quotes: () => quotes,
    iquote: (_,{by})=> quotes.filter((quote) => quote.by === by), 
    byquote: (_,{name})=> quotes.find((quote) => quote.name === name),
  },
  User: {
    //quote mei parent receive hoga
    quotes: (user) => quotes.filter((quote) => quote.by === user.id),
  }
};
export default resolvers;