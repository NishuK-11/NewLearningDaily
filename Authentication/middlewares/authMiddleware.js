const jwt = require('jsonwebtoken');

const verifyToken = async(req,res ,next)=>{
    // const token = req.body.token || req.query.token || req.headers["authorization"];
    const token = req.headers["authorization"];
    if(!token){
        return res.status(403).json({
            success:false ,
            msg:'A token is required for authentication'
        });
    }
    try{
       
        //login k time token ka naam bearer de rakhe the, 
        const bearer = token.split(' ');
        const bearerToken = bearer[1];
        const decodedData = jwt.verify(bearerToken, process.env.ACCESS_SECRET_TOKEN)
        req.user = decodedData;

    }catch(error){
        return res.status(401).json({
            success:false,
            msg:"Invalid token"
        });
    }
    return next();

}

module.exports = verifyToken;






// router.get('/profile', verifyToken, (req, res) => {
//   res.status(200).json({
//     success: true,
//     msg: 'Profile accessed',
//     user: req.user
//   });
// });
