const express = require("express");
const app = express()
const path = require("path")
const Ebay = require('ebay-node-api');
const cors = require("cors")
const bodyParser = require("body-parser");
const dotenv = require("dotenv")
dotenv.config();
const ebayApi = process.env.EBAY_CLIENT_ID
const ebaySecret = process.env.EBAY_CLIENT_SECRET

const PORT = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, 'client/build')));
// Anything that doesn't match the above, send back index.html

let access_token = '';
let ebay = new Ebay({
    clientID: ebayApi,
    clientSecret: ebaySecret,
    body: {
        grant_type: 'client_credentials',
        scope: 'https://api.ebay.com/oauth/api_scope'

    }
});

// Serve the static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// An api endpoint that returns a short list of items
app.post('/api/ebay', (req,res) => {
    const item = req.body.itemName;
    ebay.findItemsByKeywords({
            keywords: `${item} movie`,
            }).then((data) => {
                res.json(data[0].searchResult[0].item);
            }, (error) => {
                console.log(error);
            });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
app.listen(PORT, function(){
    console.log("Mongoose database connected")
    console.log(`${PORT} is running`)
});

