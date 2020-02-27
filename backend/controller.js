require('dotenv').config()
const fs = require('fs');
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'googlekey.json'
});

exports.postPicture = async (req, res) => {
  try {
    const [image] = req.body;
    const myImage = image.split(';base64,').pop();
    fs.writeFile('./images/image.png', myImage, { encoding: 'base64' }, function (err) {
      console.log('File created');
    });
    res.status(201);
    res.send();

  } catch (err) {
    console.log(err)
    res.status(500).send();
  }
}

exports.checkPicture = async (req, res) => {
  const results = await client
    .labelDetection('./images/image.png')
      const labels = results[0].labelAnnotations;
      const descriptions = labels.map(label => label.description);
      console.log(labels);
      
      res.status(200);
      res.send(descriptions);
}
