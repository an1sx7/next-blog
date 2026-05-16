import {
  Show,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

export default function Header() {
  return (
    <header
      className="w-full flex flex-row justify-between items-center"
    >
      <h2 className="font-bold text-3xl">Blog</h2>

      <div className='flex flex-row items-center gap-2'>
        <Link href="/">Home</Link>
        <Link href="/new">New</Link>
      </div>

      <div>
        <Show when="signed-out" >
          <SignInButton 
            className="bg-blue-500 hover:bg-blue-800 px-2 py-1 text-white rounded w-[80px]"
          />
        </Show>
        
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </header>
  )
}