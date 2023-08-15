function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
import { Router } from "express";
import UsersController from "@controllers/users.controller";
import { CreateUserDto } from "@dtos/users.dto";
import validationMiddleware from "@middlewares/validation.middleware";
var UsersRoute = /*#__PURE__*/ function() {
    "use strict";
    function UsersRoute() {
        _class_call_check(this, UsersRoute);
        _define_property(this, "path", "/users");
        _define_property(this, "router", Router());
        _define_property(this, "usersController", new UsersController());
        this.initializeRoutes();
    }
    _create_class(UsersRoute, [
        {
            key: "initializeRoutes",
            value: function initializeRoutes() {
                this.router.get("".concat(this.path), this.usersController.getUsers);
                this.router.get("".concat(this.path, "/:id"), this.usersController.getUserById);
                this.router.post("".concat(this.path), validationMiddleware(CreateUserDto, "body"), this.usersController.createUser);
                this.router.put("".concat(this.path, "/:id"), validationMiddleware(CreateUserDto, "body", true), this.usersController.updateUser);
                this.router.delete("".concat(this.path, "/:id"), this.usersController.deleteUser);
            }
        }
    ]);
    return UsersRoute;
}();
export default UsersRoute;

//# sourceMappingURL=users.route.js.map