import User from "../model/users.js";
import bcrypt from "bcrypt";

export const register = async (req,res) => {
    const {username, email , password} = req.body; 

    console.log(username , email , password)

    try {
        if(!username || !email || !password) {
            return res.status(422).json({error : "Please fill all the fields"});
        }

        let user = await User.findOne({email});

        if(user) {
            return res.status(422).json({error : "User already exists"});
        }

        user = new User ({
            username, 
            email, 
            password
        })

        await user.save();

        res.status(201).json({message : "User registered successfully"});
    } catch (error) {
        res.status(500).json({error : "Internal server error"});
    }
}

export const login = async (req,res) => {
    const {email , password} = req.body;

    try {
        if(!email || !password) {
            return res.status(400).json({error : "Please fill all the fields"});
        }

        let user = await User.findOne({email});

        if(!bcrypt.compare(password, user.password)) {
            return res.status(400).json({error : "Invalid credentials"});
        }

        res.status(200).json({message : "User logged in successfully"});
    } catch (error) {
        res.status(500).json({error : "Internal server error"});
    }
}