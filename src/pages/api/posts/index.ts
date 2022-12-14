// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Post } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "~/server/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | Post | {error: string}>
) {
    switch (req.method) {
        case "GET": return List();
        case "POST": return Create();
        default: return res.json({error: "Invalid method"})
    }

    async function Create() {
        const { title, content } = req.body
        console.log(title, content)
        const createdPost = await prisma.post.create({data: {title, content}})
        res.status(201).json(createdPost)
    }

    async function List() {
        res.status(200).json(await prisma.post.findMany({}))
    }
}
