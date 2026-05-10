import { 
  model,
  models,
  Schema
} from 'mongoose'

const articleSchema = new Schema({
  title:{
    type:String,
    required:true,
  },
  body:{
    type:String,
    required:true,
  },
  userId:{
    type:String,
    required:true,
  },
  imageUrl:{
    type:String,
    required:true,
  }
}, { timestamps:true })

const Article = models.Article || model('Article',articleSchema)

export default Article