"use server"

import Article from "@/models/article.model";

export async function addArticle(title,body,userId) {
    const newArticle = await Article.create({ title,body,userId })
    await newArticle.save()
    console.log(newArticle)
}