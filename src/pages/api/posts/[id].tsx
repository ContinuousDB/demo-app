// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Post } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "~/server/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | Post | null | {error: string}>
) {
    switch (req.method) {
        case "GET": return Get();
        case "PUT": return Update();
        case "DELETE": return Delete();
        default: return res.json({error: "Invalid method"})
    }

    async function Update() {
        const id = req.query.id as string;
        const { title, content } = req.body
        console.log(title, content)
        const post = await prisma.post.update({where: {id}, data: {title, content}})
        res.status(201).json(post)
    }

    async function Get() {
        const id = req.query.id as string;
        res.status(200).json(await prisma.post.findUnique({where: {id}}))
    }

    async function Delete() {
        const id = req.query.id as string;
        res.status(200).json(await prisma.post.delete({where: {id}}))
    }
}
