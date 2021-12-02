const express =require('express');
const path=require("path")
require("./db/conn");
const User=require("./models/usermessage")
const app=express();
const hbs =require("hbs");
const port = process.env.PORT || 3000;

//setting the path
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../templates/views");
// const partialpath=path.join(__dirname,"../templates/partials"); delete
//middleware
// app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
// app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jshello',express.static(path.join(__dirname,"../templates/views")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use('/js',express.static(path.join(__dirname,"../src/javascript")));
app.use('/css',express.static(path.join(__dirname,"../public/css")));
app.use('/images',express.static(path.join(__dirname,"../public/images")));
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath));
app.set("views",templatepath);
app.set('view engine','hbs');
// hbs.registerPartials(partialpath);
//routing
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/index2",(req,res)=>{
    res.render("index2");
})
app.get("/features",(req,res)=>{
    res.render("features");
})

app.get("/doc2",(req,res)=>{
    User.find({}, function(err,users){
        if(err) console.warn(err);
        res.render("doc2",{
            userinfo : users
        });
    }) 
})

//post
app.post("/features", (req,res)=>{
        var userdata = new User(req.body);
        userdata.save().then(()=>{
        res.status(201).render("features");
        // res.send(req.body);
    }).catch((error)=>{
        res.status(500).send(error);
    })
})








//server create
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})

