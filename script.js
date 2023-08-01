const arr = ["https://bd.gaadicdn.com/processedimages/yamaha/r15-v4/640X309/r15-v463eb3b0e35660.jpg?tr=w-290,h-205", "https://bd.gaadicdn.com/processedimages/yamaha/r15-v4/640X309/r15-v4614ad217e45ae.jpg?tr=w-290,h-205", "https://bd.gaadicdn.com/processedimages/yamaha/r15-v4/640X309/r15-v4614ad26f8160d.jpg?tr=w-290,h-205"];
const res = document.querySelector('#img');

function blackcol() {

    res.src = arr[0];
}

function redcol() {
    res.src = arr[1];
}

function yellowcol() {
    res.src = arr[2];
}

const black = document.querySelector('#black');
black.addEventListener('click', blackcol);


const red = document.querySelector('#red');
red.addEventListener('click', redcol);

const yellow = document.querySelector('#yellow');
yellow.addEventListener('click', yellowcol);


const btn = document.querySelector('#cart');

function fun() {

    btn.innerText = "Added to cart Successfully";
}

btn.addEventListener('click', fun);