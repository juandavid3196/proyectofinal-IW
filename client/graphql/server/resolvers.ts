import { Resolver } from "types";

const resolvers : Resolver = {
    Query: {
      users : async (paren,args,context)=> {
       const users = await context.db.user.findMany()
       return users;
    },
      user : async (parent,args,context)=> {
        const user = await context.db.user.findFirst({
            where : {
                email: args.email,
            },
        });
        return user;
    }
    },
    Mutation : {
    createUser : async (parent,args,context) => {
        const {name,email,password} = args;
        const newUser = await context.db.user.create({
            data : {
                name,
                email,
                password
            },
        });
        return newUser; 
        }
    }
  };

export {resolvers}