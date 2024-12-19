const HandleError = require("../middlewares/ErrorHandler");

class PostController{
  async getAllData(req,res){
    try {
      

      res.status(200).json({
        message:"Success",

      })
    } catch (error) {
      HandleError(res,error)
    }
  }
}
