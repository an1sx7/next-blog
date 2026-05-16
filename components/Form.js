"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addArticle } from "@/app/actions/actions";
import { useAuth } from "@clerk/nextjs";

export default function Form() {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const { userId } = useAuth()

    return (
        <div className="mt-3 py-3 flex flex-col w-[100%] gap-2 items-center">
            <Input 
                placeholder="Title" 
                className="w-[90%]" 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <Textarea
                placeholder="Body" 
                className="w-[90%]"
                value={body}
                onChange={e => setBody(e.target.value)}
            />
            <Button 
                variant="secondary" 
                className="w-[90%]"
                onClick={() => {
                    addArticle(title,body,userId)
                    setBody("")
                    setTitle("")
                }}
            >
                Create
            </Button>
        </div>
    )
}