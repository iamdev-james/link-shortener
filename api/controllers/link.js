const urlChecker=require('valid-url')



const newlink=(req,res,next)=>{
  const originalLink=req.body.original
  if(urlChecker.isUri(originalLink)){

    res.status(200).json({
      message:"success"
    })
  }else{
    res.status(400).json({
      message:"Invalid url"
    })
  }
}