
 module.exports=function(app,urlencodedParser){
	const express= require('express');
	const port=process.env.PORT || 8000;
 	app.get('/',function(req,res){
 		res.render('home');
 	});
 	app.listen(port);
 };