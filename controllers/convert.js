const datamodel = require('../models/datamodels')

//Convert api - /api/v1/rateapi
 

exports.convert = async(req,res,next) =>{
   try{
      const change = await datamodel.find({});
     
      res.json({
         success:true,
         change
      })
   }catch (error){
         res.status(404).json({
            success:false,
            message:'error boy err'
         })
   };
   
     
}