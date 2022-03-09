// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from "App/Models/Post"
export default class PostsController {

    async index({request,response}){
       const data = request.body()
        await Post.create(data)

        return response.send(data);
    }


    async store({response}){
        const post = await Post.all();
        return response.send(post);
    }
}
