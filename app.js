var express= require('express');
var app=express();
var DataStore=require('@google-cloud/datastore');
var bodyParser = require('body-parser')
var config=require('./config');
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const datastore= new DataStore({
projectId:config.projectId,
keyFile:config.keyFile
});

app.get('/getCustomers',(req,res)=>{
var query=datastore.createQuery('customer');
datastore.runQuery(query,(err,data)=>{
    if(err)
    console.log(err);
    else
    res.send(data);
})
});
app.get('/getCustomer',(req,res)=>{
    console.log(req.query);
    const id=req.query.id;
    const query = datastore.createQuery('customer').filter('__key__', '=', datastore.key(['customer',id]));
    datastore.runQuery(query,(err,data)=>{
    if(err)
    console.log(err);
    else
    res.send(data);

    })
})
app.post('/addCustomer',(req,res)=>{
    var key=datastore.key(['customer',req.body.id]);
    var entity={
        key:key,
        data:{
            FIRST_NAME:req.body.FIRST_NAME,
            LAST_NAME:req.body.LAST_NAME,
            EMAIL:req.body.EMAIL
        }
    }
    datastore.save(entity,(err,data)=>{
        if(err)
        res.status(404).send(err);
        else
        res.status(200).send('data added successfully');

    });

})
const PORT=process.env.PORT || 3000;
app.listen(PORT,(req,res)=>{
    console.log(`app started at port ${PORT}`)
})