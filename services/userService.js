import { Users } from "../models/userModel.js";
import { Blog } from "../models/blogModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const seceretKey = "dweretbrewfdqefgt632065789nbj";
export const loginUser = async (userData) => {

    try {
        const emailID = userData.email;
        const passwordByUser = userData.password;

        const userDocument = await Users.findOne({email:emailID});
        if (!userDocument) {
            return ({status:'error',message:'user does not exist'});
        }
        const hashedPassword = userDocument.password;
        const match = await bcrypt.compare(passwordByUser,hashedPassword);
        if (!match) {
            return ({status:'error',message:'Password does not match '});
        }
        const payloadForAccessToken = {
            name: userDocument.name,
            email: userDocument.email,
            age: userDocument.age,
            gender: userDocument.gender
        }
        const accessToken = jwt.sign(payloadForAccessToken,seceretKey,{expiresIn:'1h'});
        return ({status:'success',data:{accessToken}})
    }  catch (err){
        console.log("err",err);
        throw err;
    }
}

export const createUser = async (userData) => {
    try {
        let password = userData.password;
        let passwordToStoreInDb = await bcrypt.hash(password,10);
        userData["password"] = passwordToStoreInDb;
        let createdUser = await Users.insertMany([userData]);
        return createdUser;
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}

export const createBlog = async (blogData) => {
    try {
        let createdBlog = await Blog.insertMany([blogData]);
        return createdBlog;
    } catch (err) {
        console.log("Error",err);
        throw err;
    }
}