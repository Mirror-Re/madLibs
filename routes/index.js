var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    noun1: "cat",
    noun2: "dog",
    noun3: "chair",
    verb1: "run",
    adjective1: "cozy"
  });
});

/*POST form data*/
router.post('/story', function(req, res) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory,
    color: generateRandomHexCode()
  });
})


module.exports = router;

function getStory(formData) {
  if(formData.storyChoice === "1") {
    return generateStory1(formData);
  } else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  } else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData) {
  return `The ${formData.noun1} and ${formData.noun2} ${formData.verb1} over to the ${formData.adjective1} ${formData.noun3}.`
}

function generateStory2(formData) {
  return `It was a ${formData.adjective1}ly day, when suddenly the ${formData.noun1} began to ${formData.verb1} away! The ${formData.noun2} and ${formData.noun3} were shocked.`
}

function generateStory3(formData) {
  return `Quick, ${formData.noun1}! The ${formData.noun2} is ${formData.adjective1} ${formData.verb1}ing away, and ${formData.noun3} is doing nothing to stop it!`
}

function generateRandomHexCode() {
  let hexCode = "#"
  while ( hexCode.length < 7) {
    hexCode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}