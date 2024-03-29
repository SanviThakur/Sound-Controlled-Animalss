function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AyrIS5JaZ/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

      img = document.getElementById('cat')
      img1 = document.getElementById('cow')
      img2 = document.getElementById('dog')
      img3 = document.getElementById('horse')
      img4=document.getElementById('ear')
  
      if (results[0].label == "Meow") {
        img.src = 'cat.png';
        
      } else if (results[0].label == "Moo") {
        
        img1.src = 'cow.jpg';
        
      } else if (results[0].label =="Bark") {
        img2='Dog.jpg';
    
      }
      else if(results[0].label=="Neigh"){
          img3='horse.jpg';
      }
      else{
        img4='Ear.jpg';
      }
    }
  }

