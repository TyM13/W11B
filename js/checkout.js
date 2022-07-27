let movie_selection = Cookies.get(`selections`)         // gets the selections cookie and stores it as the variable movie_selection
let movie_array = JSON.parse(movie_selection);          // the movie_array (array) is = movie_selection (turns string into array)

for(let i = 0; i < movie_array.length; i++) {           // loops through the movie_array if the counter is less, adds +1 after,

document.body.insertAdjacentHTML (`beforeend`,          // inject section tag into page that will display the movie_array title, image and desc depending on what the counter is

`<section ">
<h1>${movie_array[i][`title`]}</h1>
<img src="${movie_array[i][`image_url`]}" >
<p>${movie_array[i][`description`]}</p>
<h4>${movie_array[i][`price`]}</h4>

</section>`);
}