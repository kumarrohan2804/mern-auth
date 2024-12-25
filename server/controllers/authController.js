import bcrypt from "bcryptjs";
import userModel from "../models/userModel";

export const register = async (req, res) => {
    const { password, email, name } = req.body;
    if (!password || !email || !name) {
        return res.json({ status: false, message: "Missing Details" });
    }
    try {
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.json({ success: false, message: 'User Already Exist' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ name, email, password: hashedPassword });
        await user.save();
    } catch (error) {
        return res.json({status: false, message: error.message})
    }
}