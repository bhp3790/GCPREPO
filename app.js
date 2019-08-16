var express = require('express');
var app = express();
var DataStore = require('@google-cloud/datastore');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const projectId = 'sturdy-sentry-243203';
const keyFile = './key.json';
const kind = 'customer';

// parse application/json
app.use(bodyParser.json())

const datastore = new DataStore({
    projectId: projectId,
    keyFile: keyFile
});

app.get('/getCustomers', async (req, res) => {
    var query = datastore.createQuery(kind);
    var result = await datastore.runQuery(query);
    if (!result[0])
        res.send('data not found')
    else
        res.send(result[0]);
})
app.get('/getCustomer', async (req, res) => {
    console.log(req.query);
    const id = req.query.id;
    const query = datastore.createQuery(kind).filter('__key__', '=', datastore.key([kind, id]));
    var result = await datastore.runQuery(query);
    if (!result[0])
        res.send('data not found')
    else
        res.send(result[0]);
})
app.post('/addCustomer', async (req, res) => {
    var key = datastore.key([kind, req.body.id]);
    var entity = {
        key: key,
        data: req.body
    }
    await datastore.save(entity);
    res.status(200).send('data added successfully');

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log(`app started at port ${PORT}`)
})
