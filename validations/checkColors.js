const checkName = (req, res, next) => {
    if(req.body.name){
        return next();
    } else{
        res.status(400).json({ error: "Name is required" });
    }
};

module.exports = { checkName };