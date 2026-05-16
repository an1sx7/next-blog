import connectDB from '@/lib/db'
import Article from '@/models/article.model'
import { Card,CardHeader,CardContent,CardDescription,CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { auth,createClerkClient } from '@clerk/nextjs/server'


export default async function Home() {
  const client = createClerkClient({
    secretKey:process.env.CLERK_SECRET_KEY
  })

  const { userId } = await auth()

  await connectDB()

  const artiles = await Article.find({ userId:{ $ne:userId } }).sort({ createdAt:-1 })

  const articlesJSX = artiles.map(async (article) => {
    const user = await client.users.getUser(article.userId)

    return (
      <Link href="/new" key={article._id}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{article.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <p className='text-lg'>{article.body}</p>
            <CardDescription>{user.emailAddresses[0].emailAddress}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    )
  })

  return (
    <div className='py-5 mt-3 flex flex-col justify-center gap-3 flex-wrap'>
      {articlesJSX}
    </div>
  )
}
