import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Login from "App/Models/Login";
import Logins from "Database/migrations/1646804320701_logins";
export default class RegistersController {
  async Register({ request, response }) {
    const data = await Login.create(request.body());
    return response.send({ "user created successfully": data });
  }

  async LoginUser({ request, response, auth }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");
    await auth.attempt(email, password);
    const token = await auth.attempt(email, password);
    return token.toJSON();

    //    const token = await auth.attempt(email, password, {
    //         expiresIn: '8hours'
    //       })
    //       return token.toJSON()

    // let { email, password } = request.all()

    // const user = await Login.query().where('email', email).first()
    // if (!user) {
    //     return response.badRequest({ message: 'No registered user found for the given email' })
    //   }

    //   const token = await auth.use('api').generate(user, {
    //     expiresIn: '8hours',
    //   })

    // let obj = {

    //     email: user.email,
    //     token: token,
    //     id: user.id,
    //   }
    //   return response.json(obj)
  }
}
