 module.exports=function(app,urlencodedParser){
 	app.get('/',function(req,res){
 		res.render('home');
 	});
 	app.listen(3000);
 };