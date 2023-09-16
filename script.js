
const imageUrls = [
    'https://cdn.discordapp.com/attachments/909315223817691187/1152653737614131240/F6B_9J3WgAAK7it.png',
    'https://cdn.discordapp.com/attachments/909315223817691187/1152653738062913606/Screenshot_20230916_121143_YouTube.jpg',
    'https://cdn.discordapp.com/attachments/909315223817691187/1152653738297798846/F6Ewy-SXwAA0vN8.png',
    'https://cdn.discordapp.com/attachments/909315223817691187/1152653738687873124/F6Df6fsaUAASRAa.png',
    'https://cdn.discordapp.com/attachments/909315223817691187/1152653739056963646/20230805_130219.png',
    'https://cdn.discordapp.com/attachments/909315223817691187/1152653739488981133/F53ag5LWMAAmErI.png',
    'https://cdn.discordapp.com/attachments/909315223817691187/1152653739858083870/F6Dy6NvWAAAbXS9.png',
    'https://cdn.discordapp.com/attachments/909315223817691187/1152653740260729002/F6AT5CJWAAE12PK.png',
    'https://cdn.discordapp.com/attachments/909315223817691187/1152653740571111574/Screenshot_20230915_084150_Gallery.jpg',
    'https://cdn.discordapp.com/attachments/909315223817691187/1152653740805996595/Screenshot_20230915_074930_YouTube.jpg',


];


function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}


function displayRandomImage() {
    const imageUrlInput = document.getElementById('image-url-input').value.trim();
    const imageContainer = document.getElementById('image-container');
    const randomImageElement = document.getElementById('random-image');


    if (imageUrlInput) {
        randomImageElement.src = imageUrlInput;
    } else {
        const randomImageUrl = getRandomImageUrl();
        randomImageElement.src = randomImageUrl;
    }
}


const loadImageButton = document.getElementById('load-image-button');
loadImageButton.addEventListener('click', displayRandomImage);
