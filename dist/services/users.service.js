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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
import { hash } from "bcrypt";
import { HttpException } from "@exceptions/HttpException";
import userModel from "@models/users.model";
import { isEmpty } from "@utils/util";
var UserService = /*#__PURE__*/ function() {
    "use strict";
    function UserService() {
        _class_call_check(this, UserService);
        _define_property(this, "users", userModel);
    }
    _create_class(UserService, [
        {
            key: "findAllUser",
            value: function findAllUser() {
                var _this = this;
                return _async_to_generator(function() {
                    var users;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.users.find()
                                ];
                            case 1:
                                users = _state.sent();
                                return [
                                    2,
                                    users
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "findUserById",
            value: function findUserById(userId) {
                var _this = this;
                return _async_to_generator(function() {
                    var findUser;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (isEmpty(userId)) throw new HttpException(400, "UserId is empty");
                                return [
                                    4,
                                    _this.users.findOne({
                                        _id: userId
                                    })
                                ];
                            case 1:
                                findUser = _state.sent();
                                if (!findUser) throw new HttpException(409, "User doesn't exist");
                                return [
                                    2,
                                    findUser
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createUser",
            value: function createUser(userData) {
                var _this = this;
                return _async_to_generator(function() {
                    var findUser, hashedPassword, createUserData;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (isEmpty(userData)) throw new HttpException(400, "userData is empty");
                                return [
                                    4,
                                    _this.users.findOne({
                                        email: userData.email
                                    })
                                ];
                            case 1:
                                findUser = _state.sent();
                                if (findUser) throw new HttpException(409, "This email ".concat(userData.email, " already exists"));
                                return [
                                    4,
                                    hash(userData.password, 10)
                                ];
                            case 2:
                                hashedPassword = _state.sent();
                                return [
                                    4,
                                    _this.users.create(_object_spread_props(_object_spread({}, userData), {
                                        password: hashedPassword
                                    }))
                                ];
                            case 3:
                                createUserData = _state.sent();
                                return [
                                    2,
                                    createUserData
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateUser",
            value: function updateUser(userId, userData) {
                var _this = this;
                return _async_to_generator(function() {
                    var findUser, hashedPassword, updateUserById;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (isEmpty(userData)) throw new HttpException(400, "userData is empty");
                                if (!userData.email) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.users.findOne({
                                        email: userData.email
                                    })
                                ];
                            case 1:
                                findUser = _state.sent();
                                if (findUser && findUser._id != userId) throw new HttpException(409, "This email ".concat(userData.email, " already exists"));
                                _state.label = 2;
                            case 2:
                                if (!userData.password) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    hash(userData.password, 10)
                                ];
                            case 3:
                                hashedPassword = _state.sent();
                                userData = _object_spread_props(_object_spread({}, userData), {
                                    password: hashedPassword
                                });
                                _state.label = 4;
                            case 4:
                                return [
                                    4,
                                    _this.users.findByIdAndUpdate(userId, {
                                        userData: userData
                                    })
                                ];
                            case 5:
                                updateUserById = _state.sent();
                                if (!updateUserById) throw new HttpException(409, "User doesn't exist");
                                return [
                                    2,
                                    updateUserById
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "deleteUser",
            value: function deleteUser(userId) {
                var _this = this;
                return _async_to_generator(function() {
                    var deleteUserById;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.users.findByIdAndDelete(userId)
                                ];
                            case 1:
                                deleteUserById = _state.sent();
                                if (!deleteUserById) throw new HttpException(409, "User doesn't exist");
                                return [
                                    2,
                                    deleteUserById
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return UserService;
}();
export default UserService;

//# sourceMappingURL=users.service.js.map