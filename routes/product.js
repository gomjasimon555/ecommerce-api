

const express = require('express');
const productData = require('./product.json')


//Initialize router object

const router = express.Router();


router.get('/',(req,res)=>{
    console.log(req.query)
    const {category,minprice}=req.query;
  

//Apply filter here

if(category && minprice)
{
    const categories = productData.filter((product)=>{

    return product.category === category && product.price>=minprice;
});

res.json(categories)
}
else if(category){

    const filtered = productData.filter((product)=>{

        return product.category === category;
 });
 res.json(filtered);
}

 else if(minprice)
{
   const filterd = productData.filter((product)=>{
       return product.price <= minprice;
   });
   res.json(filterd)
}

else{
    res.json(productData);

}


});



 
 router.get('/:productID',(req,res)=>{
   console.log(req.params)
   const { productID}= req.params;
   const product = productData.find((product)=> product.id === Number(productID))
   res.json(product ? product:"Index Not Found")
 }
 );

 router.post("/",(req,res)=>{
    res.send("This api will create product in database")
})
 router.put("/:productID",(req,res)=>{
    res.send("This api will replace product in database")
})
 router.patch("/:productID",(req,res)=>{
    res.send("This api will update product in database")
})
 router.delete("/:productID",(req,res)=>{
    res.send("This api will delete product in database")
})
    

module.exports = router;

