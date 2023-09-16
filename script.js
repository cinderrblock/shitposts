
const imageFiles = [
    'beesinalexus.png',

];
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    return imageFiles[randomIndex];
}


function displayRandomImage() {
    const randomImage = getRandomImage();
    const imageContainer = document.getElementById('image-container');
    const randomImageElement = document.getElementById('random-image');
    
 
    randomImageElement.src = randomImage;




    randomImageElement.addEventListener('click', function() {

        alert(`You clicked on ${randomImage}`);
    });
}

const loadImageButton = document.getElementById('load-image-button');
loadImageButton.addEventListener('click', displayRandomImage);
