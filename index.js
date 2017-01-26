var express = require('express');
var app = express();
var fs = require("fs");


app.get('/showStories', function (req, res) {

    // First read existing stories.

    var data = fs.readFileSync("stories.json");
    var data1 = fs.readFileSync("authors.json");
    var data2 = fs.readFileSync("media.json");
    var data3 = fs.readFileSync("stations.json");
    stories = JSON.parse(data);
    authors = JSON.parse(data1);
    media = JSON.parse(data2);
    stations = JSON.parse(data3);

    var parentList = [];
    for (var item of stories) {

        var title = [item.title.toUpperCase()];
        var date = item.datePublished;
        //var dateformat = moment();
        console.log(date);


        for (var item1 of media)
        {

            if (item1.story == [item.storyId])
            {
                if (item1.type == "jpg")
                {
                    var image = item1.href
                    var credit = item1.credit
                    var caption = item1.caption
                }
                if (item1.type == "mp4"){
                    var audio = item1.href
                    var mins = ~~(item1.duration / 60);
                    var secs = item1.duration % 60;
                    duration1 = "0"+ mins+":"+secs
                }
            }
        }


        for (var item1 of authors) {

            if (item.authorId == item1.id) {
                var fullName = item1.fullName.toUpperCase();
            }
        }

        var childList = [];
        var result = [];
        childList.push(JSON.stringify({"image": image,
            "credit" : credit, "caption" : caption}))
        childList.push(JSON.stringify({"audio" : audio, "duration" : duration1}))
        result.push({"title": title, "datePublished" : date,  "authorname" : fullName,
            "media" : childList});

        console.log(result);


        //res.send(JSON.stringify(result, null, 2));
    }


})


var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)

})