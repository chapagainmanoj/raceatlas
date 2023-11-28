const User = require('./model');
const createToken = require('./auth');


module.exports.signup = async function (req, res, next) {
    try {
        let newUser = new User(req.body);

        console.log(newUser);

        let result = await User.create(newUser);
        res.json({
            success: true,
            message: "User created successfully.",
            user: result
        });
    } catch (error) {
        console.error("Cannot create user", error);
        return res.status(500).send("Invalid user create");
    }
}

module.exports.login = async function(req, res, next){
    console.log("before findOne");
    try{
        let username = req.body.username;
        let password = req.body.password;
        console.log(req.body)
        let user = await User.findOne({"username" : req.body.username});
        console.log("after findOne");
        console.log(username)
        console.log(password);

        if((user === undefined || user === null) ){
            console.log("in if");
            res.status(200).json({ message: "User not found" });
            
            throw new Error("User does not exist.");
            
        }
        res.json({
            success: true,
            message: "User created successfully.",
            user: result
        });
    }catch(error){
        console.error("Cannot login user", error);
        return res.status(401).send("Invalid user login");
    }

}

module.exports.isAdmin = async function(req, res, next){
    console.log("Payload", req.auth);
    const user = await Usermodel.findById(req.auth.id);

    let isAdmin = user.admin;

    if(!isAdmin){
        return res.status('403').json(
            {
                success: false,
                message: "User is not authorized"
            }
        )
    }
    next();

}
