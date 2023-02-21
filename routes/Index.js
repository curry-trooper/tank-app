const Facades = require("tankman/framework/facades/Facades");
const HelloController = require("../app/http/controller/HelloController");
module.exports = () => {
    Facades.Route.Get("/", (httpCtx) => {
        httpCtx.response.SetBody('<h1>home page!</h1>');
    });
    Facades.Route.Get("/test/:id",  HelloController,"Index").Middleware(['test1','test2']);

    Facades.Route.Get("/404-page", (httpCtx) => {
        httpCtx.response.SetBody('<h1>NotFound Page,http-Code:404!</h1>');
    }).Name("404");


    Facades.Route.Group("/one",
        function (route) {
        route.Redirect("/to/github", "https://github.com").Name("to.google")
    });
};
