


let selection_one =                     // created variable that is an object that contains key values below for the six selections
{
    title: `Shawshank Redemption`,
    price: 5,
    image_url: `/shawshank.jpg`,
    description: `Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.
 Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of 
 a crime he did not commit`
};


let selection_two =                     
{
    title: `The Dark Knight`,
    price: 5,
    image_url: `/darkknight.jpg`,
    description: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one
    of the greatest psychological and physical tests of his ability to fight injustice`
};


let selection_three =                   
{
    title: `The godfather`,
    price: 5,
    image_url: `/godfather.jpg`,
    description: `The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his
    clandestine empire to his reluctant youngest son`
};

let selection_four =                    
{
    title: `The Green mile`,
    price: 5,
    image_url: `/green mile.jpg`,
    description: `The lives of guards on Death Row are affected by one of their charges: a black man accused of child
    murder and rape, yet who has a mysterious gift.`
};


let selection_five =                    
{
    title: `Inception`,
    price: 5,
    image_url: `/inception.jpg`,
    description: `>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse
    task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his
    team to disaster`
};


let selection_six =                    
{
    title: `The Matrix`,
    price: 5,
    image_url: `/matrix.jpg`,
    description: `When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking
    truth--the life he knows is the elaborate deception of an evil cyber-intelligence.`
};





let movie_array = [];                                           // made variable movie_array which is a empty array
let selections = Cookies.get(`selections`)                      // gets the selections cookie and stores it as the variable selections
if (selections !== undefined) {                                 // if selections is defined (cookie exists) 
    movie_array = JSON.parse(selections);                       // the movie_array (array) is = to the selections cookie
}

function buttonOne(details) {                                   // all the functions below act the same way just w/ diff variables

    movie_array.push(selection_one)                             // pushes the variable selection_one (obj) into the array w/ the variable movie_array

    let selection_one_json = JSON.stringify(movie_array);       // puts the movie_array into a string and stores it as the variable selection_one_json
    Cookies.set(`selections`, selection_one_json);              // sets the cookies name to selections and value to selection_one_json (string)
}

let button_one = document.getElementById(`button_one`)          // gets the id button_one and stores it as the variable button_one
button_one.addEventListener(`click`, buttonOne)                 // when button_one is clicked it will call the function buttonOne





function buttontwo(details) {

    movie_array.push(selection_two)

    let selection_two_json = JSON.stringify(movie_array);
    Cookies.set(`selections`, selection_two_json);
}

let button_two = document.getElementById(`button_two`)
button_two.addEventListener(`click`, buttontwo)



function buttonthree(details) {

    movie_array.push(selection_three)

    let selection_three_json = JSON.stringify(movie_array);
    Cookies.set(`selections`, selection_three_json);
}

let button_three = document.getElementById(`button_three`)
button_three.addEventListener(`click`, buttonthree)




function buttonfour(details) {

    movie_array.push(selection_four)

    let selection_four_json = JSON.stringify(movie_array);
    Cookies.set(`selections`, selection_four_json);
}

let button_four = document.getElementById(`button_four`)
button_four.addEventListener(`click`, buttonfour)




function buttonfive(details) {

    movie_array.push(selection_five)

    let selection_five_json = JSON.stringify(movie_array);
    Cookies.set(`selections`, selection_five_json);
}

let button_five = document.getElementById(`button_five`)
button_five.addEventListener(`click`, buttonfive)



function buttonsix(details) {

    movie_array.push(selection_six)

    let selection_six_json = JSON.stringify(movie_array);
    Cookies.set(`selections`, selection_six_json);
}

let button_six = document.getElementById(`button_six`)
button_six.addEventListener(`click`, buttonsix)
