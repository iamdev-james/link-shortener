const headerAccess=(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With,Content-Type,Accept,Authorization')
    if(req.method==='OPTIONS'){
        res.header('Allow-Control-Allow-Methods',
        'POST,PUT,PATCH,DELETE,GET')
        return res.status(200).json({})
    }
    next()
}

module.exports=headerAccess