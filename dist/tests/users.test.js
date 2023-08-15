function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import request from "supertest";
import App from "@/app";
import UsersRoute from "@routes/users.route";
afterAll(/*#__PURE__*/ _async_to_generator(function() {
    return _ts_generator(this, function(_state) {
        switch(_state.label){
            case 0:
                return [
                    4,
                    new Promise(function(resolve) {
                        return setTimeout(function() {
                            return resolve();
                        }, 500);
                    })
                ];
            case 1:
                _state.sent();
                return [
                    2
                ];
        }
    });
}));
describe("Testing Users", function() {
    describe("[GET] /users", function() {
        it("response fineAll Users", /*#__PURE__*/ _async_to_generator(function() {
            var usersRoute, users, _, _1, _tmp, _tmp1, _tmp2, _tmp3, app;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        usersRoute = new UsersRoute();
                        users = usersRoute.usersController.userService.users;
                        _1 = (_ = jest.fn()).mockReturnValue;
                        _tmp = {
                            _id: "qpwoeiruty",
                            email: "a@email.com"
                        };
                        return [
                            4,
                            bcrypt.hash("q1w2e3r4!", 10)
                        ];
                    case 1:
                        _tmp1 = [
                            (_tmp.password = _state.sent(), _tmp)
                        ];
                        _tmp2 = {
                            _id: "alskdjfhg",
                            email: "b@email.com"
                        };
                        return [
                            4,
                            bcrypt.hash("a1s2d3f4!", 10)
                        ];
                    case 2:
                        _tmp1 = _tmp1.concat((_tmp2.password = _state.sent(), _tmp2));
                        _tmp3 = {
                            _id: "zmxncbv",
                            email: "c@email.com"
                        };
                        return [
                            4,
                            bcrypt.hash("z1x2c3v4!", 10)
                        ];
                    case 3:
                        users.find = _1.apply(_, [
                            _tmp1.concat([
                                (_tmp3.password = _state.sent(), _tmp3)
                            ])
                        ]);
                        mongoose.connect = jest.fn();
                        app = new App([
                            usersRoute
                        ]);
                        return [
                            2,
                            request(app.getServer()).get("".concat(usersRoute.path)).expect(200)
                        ];
                }
            });
        }));
    });
    describe("[GET] /users/:id", function() {
        it("response findOne User", /*#__PURE__*/ _async_to_generator(function() {
            var userId, usersRoute, users, _, _1, _tmp, app;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        userId = "qpwoeiruty";
                        usersRoute = new UsersRoute();
                        users = usersRoute.usersController.userService.users;
                        _1 = (_ = jest.fn()).mockReturnValue;
                        _tmp = {
                            _id: "qpwoeiruty",
                            email: "a@email.com"
                        };
                        return [
                            4,
                            bcrypt.hash("q1w2e3r4!", 10)
                        ];
                    case 1:
                        users.findOne = _1.apply(_, [
                            (_tmp.password = _state.sent(), _tmp)
                        ]);
                        mongoose.connect = jest.fn();
                        app = new App([
                            usersRoute
                        ]);
                        return [
                            2,
                            request(app.getServer()).get("".concat(usersRoute.path, "/").concat(userId)).expect(200)
                        ];
                }
            });
        }));
    });
    describe("[POST] /users", function() {
        it("response Create User", /*#__PURE__*/ _async_to_generator(function() {
            var userData, usersRoute, users, _, _1, _tmp, app;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        userData = {
                            email: "test@email.com",
                            password: "q1w2e3r4"
                        };
                        usersRoute = new UsersRoute();
                        users = usersRoute.usersController.userService.users;
                        users.findOne = jest.fn().mockReturnValue(null);
                        _1 = (_ = jest.fn()).mockReturnValue;
                        _tmp = {
                            _id: "60706478aad6c9ad19a31c84",
                            email: userData.email
                        };
                        return [
                            4,
                            bcrypt.hash(userData.password, 10)
                        ];
                    case 1:
                        users.create = _1.apply(_, [
                            (_tmp.password = _state.sent(), _tmp)
                        ]);
                        mongoose.connect = jest.fn();
                        app = new App([
                            usersRoute
                        ]);
                        return [
                            2,
                            request(app.getServer()).post("".concat(usersRoute.path)).send(userData).expect(201)
                        ];
                }
            });
        }));
    });
    describe("[PUT] /users/:id", function() {
        it("response Update User", /*#__PURE__*/ _async_to_generator(function() {
            var userId, userData, usersRoute, users, _, _1, _tmp, _2, _3, _tmp1, app;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        userId = "60706478aad6c9ad19a31c84";
                        userData = {
                            email: "test@email.com",
                            password: "q1w2e3r4"
                        };
                        usersRoute = new UsersRoute();
                        users = usersRoute.usersController.userService.users;
                        if (!userData.email) return [
                            3,
                            2
                        ];
                        _1 = (_ = jest.fn()).mockReturnValue;
                        _tmp = {
                            _id: userId,
                            email: userData.email
                        };
                        return [
                            4,
                            bcrypt.hash(userData.password, 10)
                        ];
                    case 1:
                        users.findOne = _1.apply(_, [
                            (_tmp.password = _state.sent(), _tmp)
                        ]);
                        _state.label = 2;
                    case 2:
                        _3 = (_2 = jest.fn()).mockReturnValue;
                        _tmp1 = {
                            _id: userId,
                            email: userData.email
                        };
                        return [
                            4,
                            bcrypt.hash(userData.password, 10)
                        ];
                    case 3:
                        users.findByIdAndUpdate = _3.apply(_2, [
                            (_tmp1.password = _state.sent(), _tmp1)
                        ]);
                        mongoose.connect = jest.fn();
                        app = new App([
                            usersRoute
                        ]);
                        return [
                            2,
                            request(app.getServer()).put("".concat(usersRoute.path, "/").concat(userId)).send(userData)
                        ];
                }
            });
        }));
    });
    describe("[DELETE] /users/:id", function() {
        it("response Delete User", /*#__PURE__*/ _async_to_generator(function() {
            var userId, usersRoute, users, _, _1, _tmp, app;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        userId = "60706478aad6c9ad19a31c84";
                        usersRoute = new UsersRoute();
                        users = usersRoute.usersController.userService.users;
                        _1 = (_ = jest.fn()).mockReturnValue;
                        _tmp = {
                            _id: "60706478aad6c9ad19a31c84",
                            email: "test@email.com"
                        };
                        return [
                            4,
                            bcrypt.hash("q1w2e3r4!", 10)
                        ];
                    case 1:
                        users.findByIdAndDelete = _1.apply(_, [
                            (_tmp.password = _state.sent(), _tmp)
                        ]);
                        mongoose.connect = jest.fn();
                        app = new App([
                            usersRoute
                        ]);
                        return [
                            2,
                            request(app.getServer()).delete("".concat(usersRoute.path, "/").concat(userId)).expect(200)
                        ];
                }
            });
        }));
    });
});

//# sourceMappingURL=users.test.js.map