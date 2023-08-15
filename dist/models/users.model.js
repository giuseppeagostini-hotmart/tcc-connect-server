import { model, Schema } from "mongoose";
var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
var userModel = model("User", userSchema);
export default userModel;

//# sourceMappingURL=users.model.js.map