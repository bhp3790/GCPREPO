var express = require('express');
var app = express();
var DataStore = require('@google-cloud/datastore');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const projectId = 'sturdy-sentry-243203';
const keyFile = './key.json';
const kind = 'customer';

app.use(bodyParser.json())

const datastore = new DataStore({
    projectId: projectId,
    keyFile: keyFile
});

app.get('/getCustomers', async (req, res) => {
    var query = datastore.createQuery(kind);
    var result = await datastore.runQuery(query);
    if (result[0].length == 0)
        res.status(400).json({ "errMessage": "No record found" });
    else
        res.json(result[0]);
})
app.get('/getCustomer', async (req, res) => {
    console.log(req.query);
    const id = parseInt(req.query.id);
    const query = datastore.createQuery(kind).filter('__key__', '=', datastore.key([kind, id]));
    var result = await datastore.runQuery(query);
    if (result[0].length == 0)
        res.status(400).json({ "errMessage": "No record found" });
    else
        res.json(result[0]);
})
app.post('/addCustomer', async (req, res) => {
    var key = datastore.key([kind]);
    var entity = {
        key: key,
        data: req.body
    }
    await datastore.save(entity);
    res.json({ "result ": "Data added Successfully" });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log(`app started at port ${PORT}`)
})
