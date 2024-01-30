import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";

export default class PostsController {
  async index({}: HttpContextContract) {
    const allPosts = await Post.all();
    return allPosts;
  }

  async store({ request }: HttpContextContract) {
    const data = request.only(["title", "content"]);

    const post = await Post.create(data);
    return post;
  }

  async show({ params, response }: HttpContextContract) {
    const id = params.id;
    const post = await Post.find(id);

    if (!post) {
      response.notFound();
    }
    return post;
  }

  async destroy({ params, response }: HttpContextContract) {
    const id = params.id;
    const post = await Post.find(id);

    if (!post) {
      response.notFound();
    } else {
      await post.delete();
    }
  }
}
