const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.listen(4000, ()=> {
    console.log('server running on port 4000');
});

app.get('/download', (req, res) => {
    var URL = reg.query.URL;
    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(URL, {
        format: 'mp4'
    })/*.pipe(res);*/.pipe(fs.createWriteStream('video.flv'));
});