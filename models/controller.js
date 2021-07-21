 const express= require('express');
 const port=process.env.PORT || 8000;
 module.exports=function(app,urlencodedParser){
 	app.get('/',function(req,res){
 		res.render('home');
 	});
 	app.listen(port);
 };