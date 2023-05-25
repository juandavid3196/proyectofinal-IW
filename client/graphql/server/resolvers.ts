import { Resolver } from "types";

const resolvers : Resolver = {
    Query: {
    users : async (parent,args,context)=> {
       const users = await context.db.user.findMany({
        include : {
            role:true,
        }
       });
       return users;
    },
    user: async (parent,args,context)=> {
        const users = await context.db.user.findUnique({
         where : {
            email : args.email,
         },
         include : {
            role:true
         }
        });
        return users;
     },
    materials: async (parent,args,context) => {
        const materials = await context.db.material.findMany();
        return materials;
    },
    inventories: async (parent,args,context) => {
        const inventories = await context.db.inventory.findMany();
        const specificInventories = inventories.filter(inventory => inventory.matId === args.id);
        return specificInventories;
    },

    },
    Mutation : {
    createMaterial : async (parent,args,context) => {
        const {name,balance,createdBy} = args;
        const newMaterial = await context.db.material.create({
            data : {
                name,
                balance,
                createdBy

            },
        });
        return newMaterial; 
        },
    createInventory : async (parent,args,context) => {
        const {input,output,createdBy,material} = args;
        const newInventory = await context.db.inventory.create({
            data : {
                input,
                output,
                createdBy,
                material

            },
        });
        return newInventory; 
        }
    }
  };

export {resolvers}