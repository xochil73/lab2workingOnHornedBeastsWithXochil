
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
      });
    })
    .then(function() {
      hornedBeasts.forEach(differentGeneric => {
        differentGeneric.render();
      });
    });
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
};

HornMaker.prototype.render = function(){
  $('main').append('<div class="clone"></div>');
  let $clone = $('div[class="clone"]');
  let photoTemplate = $('#photo-template').html();
  $clone.html(photoTemplate);
  $clone.find('h1').text(this.title);
  $clone.find('p').text(this.description);
  $clone.find('img').attr('src', this.image_url);
  $clone.removeClass('clone');
  $clone.attr('class', this.title);
};

// let trial = new HornMaker('description',4,'image_url','keyword','title');

//  let myArr = ['myData1', 'myData2', ];

//  console.log(myArr[0]);


{/* <header>
<h1>The Gallery of Horns</h1>
<select id="tryMe" name="horned">
  <option value="default">Filter by Keyword</option>
  <option value="narwhal">narwhal</option>
  <option value="rhino">rhino</option>
  <option value="unicorn">unicorn</option> */}


// $('select[name="icecream"]').on('change', function() {
  
//   let $selection = $(this).val();
//   console.log($selection);
//   $('img').hide()
  // $(`img[data-flavor="${$selection}"]`).show()
// })

$('select[name="horned"]').on('change',function(){
  let $selection = $(this).val();
  let $playAround = $(this);
  console.log($playAround);
  console.log($selection);
  $('img').hide();
  
  // $(`img[keyword="${$selection}"]`).show();

  let url = "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-….jpg/wholesale-halloween-costume-prop-unicorn.jpg";

  url.show();

  for (let i = 0; i < hornedBeasts.length; i ++){
    console.log(hornedBeasts[i].keyword);
    if (hornedBeasts[i].keyword === $selection){
      console.log('found it', hornedBeasts[i].keyword);
      hornedBeasts[i].show();

      // hornedBeasts[i].keyword.show();

    }

  }
  // $(`img[description="${$selection}"]`).show();

  
  // $(`img[description: "A unicorn and a narwhal nuzzling their horns"]`).show();

  // hornedBeasts[0].image_url.show();  



});

let shower = () => {
  $('img').show();
};

const image = $('img');
console.log(image);


let imgArr = [];
let imgAsker = function (){
  let image = $('img');
  imgArr.push(image);
  console.log(image);
};

imgAsker();



// let tryIt = $('select');
// console.log(tryIt.html);

// let tryAgain = $('tryMe');
// // console.log(tryAgain);

// tryIt.on('click', function(){
//   let $whereToGo = $(this).data('keyword');
//   console.log($whereToGo);

// });


