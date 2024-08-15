import fs from 'fs'
import ytdl from '@distube/ytdl-core'
// const ytdl = require('@distube/ytdl-core');
const videoId = 'mrgbbziN2so'
try {

    //const ytdl = require('ytdl-core');
    
    
    console.log("Saving: "+videoId);

    ytdl("https://www.youtube.com/watch?v="+videoId).pipe(
      fs.createWriteStream('./download.mp4'));
    
    // res.writeHead(200, {"Content-Type": "text/plain"});
    // res.end(JSON.stringify({}));
} catch (error) {
  console.error('Error handling request:', error);
//   res.status(500).json({ error: 'An error occurred' }); // Send generic error reslponse
console.log(error)
}