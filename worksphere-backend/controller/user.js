const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.loginThroughGmail = async(req,res)=>{
    try{
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });
        const payload = ticket.getPayload();

        const {sub, emai, name, picture} = payload;

        const userExist = await User.findOne({email});
        if(!userExist) {
            //Register new user
            userExist = await User.create({
                googleId: sub,
                email,
                f_name:name,
                profilePic: picture
            });
        }
        return res.status(200).json({ user: userExist });
        
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Server error', message:err.message });
    }
}

exports.register = async (req, res)=>{
    try{
        let {email,password,f_name} = req.body;
        let isUserExist = await User.findOne({email});
        if(isUserExist){
            return res.status(400).json({ error: "Already have a account with this email. Please try with other email" });
        }
        const hashedPassword = await bcryptjs.hash(password,10);
        console.log(hashedPassword)
        const newUser = new User({email,password:hashedPassword,f_name});
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully', success: "yes", data: newUser });
        
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Server error', message:err.message });
    }
}



exports.login = async(req,res)=>{
    try{
        let {email,password} = req.body;
    const userExist = await User.findOne({email});

        if(userExist && await bcryptjs.compare(password,userExist.password)){
            return res.json({ message: 'Logged in successfully', success: "true", userExist });
        }else{
            return res.status(400).json({ error: 'Invalid credentials' });
        }
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Server error',message:err.message });
    }
}