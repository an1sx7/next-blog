import { connect } from 'mongoose'

let cashed = globalThis.mongoose

if (!cashed) {
  globalThis.mongoose = { conn:null,promise:null }
  cashed = globalThis.mongoose
}

async function connectDB() {
  if (cashed.conn) return cashed.conn
  
  if (!cashed.promise) {
    const url = process.env.NEXT_PUBLIC_MONGODB_URL
    cashed.promise = connect(url)
  }
  
  cashed.conn = await cashed.promise
  return cashed.conn
}

export default connectDB