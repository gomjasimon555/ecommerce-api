


const productData = require("./product.json")

const express = require('express');



const app = express();

app.use(express.json());



const homeRouter = require('./routes/home')
const productRouter = require('./routes/product')


app.use(homeRouter);
app.use('/api/products',productRouter)
 


app.post('/api/products',(req,res)=>{

const schema ={
  name:joi.string().min(3).required()
};

const result = joi.validate(req.body, schema);
if(result.error){
  res.status(400).send(result.error.details[0].message);
  return;  
}

  const product={
    id: productData.length +1,
    name:req.body.name
  };

  productData.push(product)
  res.send(product);
});

const port = process.env.PORT || 4000;
app.listen(port,()=>{
  console.log(`Server started at port ${port}`)
})  

console.log('test')