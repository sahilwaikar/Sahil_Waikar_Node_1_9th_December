import { createBlog, createUser, loginUser } from '../services/userService.js';

export const createUserHandler = async (req, res) => {
    let userData = req.body;
    try {
        let createdUser = await createUser(userData);
        res.send({ message: 'user created successfully', data: createdUser });
    }
    catch (err) {
        res.status(500).send({ message: 'user creation failed', err });
    }

}
export const loginUserHandler = async (req, res) => {
    try {
        const userData = req.body;
        const user = await loginUser(userData);
        if (user.status == "error") {
            res.status(401).send(user);
        }
        else {
            res.status(200).send(user);
        }
    }
    catch (err) {
        res.status(500).send({ message: 'Error while logging' });
    }
}

export const createBlogHandler = async (req, res) => {
    let blogData = req.body;
    try {
        let createdBlog = await createBlog(blogData);
        res.send({ message: 'Blog created successfully', data: createdBlog });
    }
    catch (err) {
        res.status(500).send({ message: 'Blog creation failed', err });
    }

}