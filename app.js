
// $.getJSON('mydata.json', function(data) {
//   console.log(data);

// });

let hornedBeasts = [];



function readJson () {
$.get('page-1.json', 'json')
  .then(data => {
    // console.log(data);
      data.forEach(generic =>{
        // console.log(generic);
        new HornMaker(generic);
      })
  })
  .then(function() {
    hornedBeasts.forEach(differentGeneric => {
      differentGeneric.render();
    })
  })
}

$(() => readJson());


// description: "A unicorn and a narwhal nuzzling their horns"
// horns: 1
// image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
// keyword: "narwhal"
// title: "UniWhal"


let HornMaker = function(catchall){
  this.image_url = catchall.image_url;
  this.title = catchall.title;
  this.description = catchall.description;
  this.horns = catchall.horns;
  this.keyword = catchall.keyword;
  hornedBeasts.push(this);
}

HornMaker.prototype.render = function(){
$('main').append(`<div class="clone"></div>`);
let $clone = $(`div[class="clone"]`);
let photoTemplate = $(`#photo-template`).html();
$clone.html(photoTemplate);
$clone.find('h1').text(this.title);
$clone.find('p').text(this.description);
$clone.find('img').attr('src', this.image_url);
$clone.removeClass('clone');
$clone.attr('class', this.title);
}

// let trial = new HornMaker('description',4,'image_url','keyword','title');

//  let myArr = ['myData1', 'myData2', ];

//  console.log(myArr[0]);


