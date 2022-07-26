let movie_selection = Cookies.get(`selections`)
let movie_array = JSON.parse(movie_selection);

for(i = 0; i < movie_array.length; i++) {

document.body.insertAdjacentHTML (`beforeend`,

`<section ">
<h1>${movie_array[i][`title`]}</h1>
<img src="${movie_array[i][`image_url`]}" >
<p>${movie_array[i][`description`]}</p>


</section>`);
}