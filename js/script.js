console.log("script.js loaded");

const apiKey = "spc5YKzm7OOTps2UbwQM7IH8pj53RZto";

let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=funny&limit=12`;

async function fetchGifs() {
  const response = await fetch(endpoint);
  const data = await response.json();

  // Step 7 requirement: store original image URLs in an array called images
  const images = data.data.map(gif => gif.images.original.url);

  console.log(images); // preview in console

  return images;
}

const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");

button.addEventListener("click", async () => {
  const images = await fetchGifs(); // call your Step 7 function

  gifContainer.innerHTML = ""; // clear old gifs

  for (let img of images) {
    gifContainer.innerHTML += `
      <img src="${img}" class="col-3 mb-3">
    `;
  }
});