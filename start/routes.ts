import Route from "@ioc:Adonis/Core/Route";
import User from "App/Models/User";

// Route.get("/", "HomeController.index");
// Route.get("/about", "HomeController.about");

Route.get("/", async () => {
  //   let _json = [
  //     { name: "Teste1", email: "teste@teste.com", password: "12345678" },
  //     { name: "Teste2", email: "teste@teste.com", password: "12345678" },
  //   ];

  //   const users = await User.createMany(_json);

  let users = await User.all();
  users.map((user) => {
    user.delete();
  });

  return users;
});
