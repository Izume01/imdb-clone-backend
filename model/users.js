import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String, 
        required : true, 
        trim : true,
        unique : true
    }, 
    email : {
        type : String, 
        required : true, 
        trim : true, 
        unique : true
    },
    password : {
        type : String, 
        required : true
    }
},{timestamps : true});

userSchema.pre('save ' , async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next();
})

const User = mongoose.model('User', userSchema);

export default User;