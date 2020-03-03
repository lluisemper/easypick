require('dotenv').config()
const fs = require('fs');
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'googlekey.json'
});
const Recipes = require('./model');



exports.postPicture = async (req, res) => {
  try {
    const [image] = req.body;
    const myImage = image.split(';base64,').pop();
    fs.writeFile('./public/image.png', myImage, { encoding: 'base64' }, function (err) {
      if (err) {
        console.log(err)
        throw new Error()
      }
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
    .labelDetection('./public/image.png')
  const labels = results[0].labelAnnotations;
  const descriptions = labels.map(label => label.description);
  console.log(labels);

  res.status(200);
  res.send(descriptions);
}

exports.signUp = async (req, res) => {  
  try {
    const user = await Recipes.create(req.body);
    res.cookie('token', user.accessToken);
    res.status(201);
    res.json(user);
  } catch {
    res.status(500).send();
  }
}