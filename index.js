let app = require("express")();
let cors = require("cors");
const bodyParser = require("body-parser");
let http = require("http").createServer(app);


app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

var storyController = require("./controllers/story.js");
var houseController = require("./controllers/house.js");

app.use("/house", houseController);
app.use("/story", storyController);

app.listen(3000, () => {
    console.log("Server running on port 3000");
   });