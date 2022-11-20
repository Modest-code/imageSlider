//  declaring variables needed
let initialized_zero, image_max, index_max, full_sec, change_image, programming_language, programming_languages_index;
//  a easier way to read 0
initialized_zero = 0;
//  declaring change image to 0
change_image = initialized_zero;
//  list for language names (arrays index -> 0)
programming_language = ['Carbon', 'JavaScript', 'SEE', "HTML", "C++"];
//  represents the first index
programming_languages_index = initialized_zero;
//  sets 1000 milisecond in a var
full_sec = 1000;
//  the max of index can be changed in this var
index_max = 5; //size of programming language array
//  the max of image can be changed in this var
image_max = 5;
function Reset() {
    doc_the_ids()
    image_id.src = ``
    index_array.innerHTML = ``
}

function doc_the_ids() {
    //  get img id
    image_id = document.getElementById('image_id');
    //  get index array id
    index_array = document.getElementById('index_array');
    //  get clbtn id
    click_button = document.getElementById('click_button');
};
function next_image() {
    //  waits 1 second and executes function
    timer_one = setTimeout(next_image, full_sec);
    //  put id here
    doc_the_ids();
    //  put img number in the string
    image_id.src = `img/${change_image}.png`;
    //  write img number in page
    index_array.innerHTML = `Language Name: ${programming_language[programming_languages_index++]}`;
    //  increment img
    change_image++;
    if (programming_languages_index == index_max) {
        //  initialize img when img reaches max
        programming_languages_index = initialized_zero;
        //  sets image to an empty string
        image_id.src = ``;
    }
    if (change_image == initialized_zero) {
        //  undisables button
        click_button.disabled = false;
    };
    if (change_image == image_max) {
        //  shows the last index to screen
        image_id.src = `img/${change_image}.png`;
        //  set img num to 0
        change_image = initialized_zero;
        //  Clears the first timer
        clearTimeout(timer_one);
    };
};

//image_id.src = document.write(`<img class='animate__animated animate__slideInRight'
//id='img' src='img/${change_image}.png' style='width: 250px;'>`)
