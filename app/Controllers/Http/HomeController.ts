// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  async index({ view }) {
    return view.render("welcome");
  }

  async about({ view }) {
    return view.render("about");
  }
}
