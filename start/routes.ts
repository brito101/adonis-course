import Route from "@ioc:Adonis/Core/Route";

// Route.get("/", "HomeController.index");

Route.get("/posts", "PostsController.index");
Route.post("/posts", "PostsController.store");
Route.get("/posts/:id", "PostsController.show");
Route.delete("/posts/:id", "PostsController.destroy");
