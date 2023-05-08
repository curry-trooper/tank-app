const facades = require("tankman/framework/facades/Facades");
const Controller = require("tankman/framework/http/controller/Controller");

class SessionController extends Controller {
    constructor() {
        super();

    }

    /**
     *
     * @param httpCtx
     */
    store(httpCtx) {
        const data = {
            avatar: 'https://avatars.githubusercontent.com/u/466966?v=4',
            username: 'John Doe',
            email: 'john@example.com',
            birthday: '1990-01-01',
            gender: 'male',
            country: 'China',
            github: 'https://github.com/fanqie',
            blog: 'https://my.oschina.net/youa',
        };
        httpCtx.session.set("userData",data);
        httpCtx.session.flash("flashData",data);
        httpCtx.response.view("example.user-profile",data)

    }

    show(httpCtx){
        const data = httpCtx.session.get("userData");
        console.log("allSession",httpCtx.session.all())
        httpCtx.session.get("flashData");
        httpCtx.response.view("example.user-profile",data)

    }
}

module.exports = SessionController
