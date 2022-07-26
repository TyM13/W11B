


let selection_one = 
    {
        title: `Show One`,
        price: 5,
        image_url: `/shawshank.jpg`,
        description: `show or movie for rent`
    };


    let selection_two =
    {
        title: `Show two`,
        price: 5,
        image_url: `/shawshank.jpg`,
        description: `show or movie for rent`
    };


    let selection_three =
    {
        title: `Show three`,
        price: 5,
        image_url: `/shawshank.jpg`,
        description: `show or movie for rent`
    };

    let selection_four =
    {
        title: `Show four`,
        price: 5,
        image_url: `/shawshank.jpg`,
        description: `show or movie for rent`
    };


    let selection_five =
    {
        title: `Show five`,
        price: 5,
        image_url: `/shawshank.jpg`,
        description: `show or movie for rent`
    };


    let selection_six =
    {
        title: `Show six`,
        price: 5,
        image_url: `/shawshank.jpg`,
        description: `show or movie for rent`
    };



let movie_array = [];
function buttonOne(details) {   
   
movie_array.push(selection_one)

     let selection_one_json = JSON.stringify(movie_array);
    Cookies.set(`selections`, selection_one_json);
}

let button_one = document.getElementById(`button_one`)
button_one.addEventListener(`click`, buttonOne)





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
