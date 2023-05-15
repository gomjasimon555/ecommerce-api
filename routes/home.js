const express = require('express');

const router = express.Router();



router.get('/',(req,res)=>{
    const quote = productData[Math.floor(Math.random()*productData.length)];
    res.json(quote)
}
);

module.exports = router;