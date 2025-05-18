import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"; // fixed import name (you used bcryptjs but named it 'bcryptjs')

export const signup = async (req, res) => {
  
  try {
    const { fullname, email, password } = req.body;

    const user = await User.findOne({ email });
    
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bcryptjs.hash(password, 10); // ✅ await is important

    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword // ✅ Save in the correct field
    });

    await createdUser.save();
    res.status(201).json({ message: "User created successfully",user:{
      id:createdUser._id,
      fullname:createdUser.fullname,
      email:createdUser.email,
    } });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const login = async (req, res) => {
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch= await bcryptjs.compareSync(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        else{
            res.status(200).json({message:"Login successful",user:{
                id:user._id,
                fullname:user.fullname,
                email:user.email,

            }});
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
