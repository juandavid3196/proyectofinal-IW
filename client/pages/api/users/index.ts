import { NextApiRequest,NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const userEndPoint = async (req:NextApiRequest,res:NextApiResponse) => {

    if(req.method === 'GET'){
        const users = await prisma.user.findMany();
        res.status(200).json({users});
    }
}

export default userEndPoint