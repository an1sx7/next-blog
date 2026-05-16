import { auth } from "@clerk/nextjs/server";
import Form from "@/components/Form";
import connectDB from "@/lib/db";



export default async function NewArticle() {
    const { userId } = await auth()
    
    await connectDB()

    if (!userId) {
        return (
            <div className="py-3">
                <p>Sign in first</p>
            </div>
        )
    }


    

    return <Form/>
}