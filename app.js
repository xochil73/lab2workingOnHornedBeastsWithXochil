let hornedBeasts = [];
let moreHornedBeasts = [];





function readJson () {
  $.get('page-1.json', 'json')
    .then(data => {
      data.forEach(generic =>{
        new HornMaker(generic, 1);
      });
    })
    .then(function() {
      hornedBeasts.forEach(differentGeneric => {
        differentGeneric.render();
        differentGeneric.menu();
      });
    });

}

function readMoreJson () {
  $.get('page-2.json', 'json')
    .then(data => {
      data.forEach(moreData => {
        new HornMaker(moreData, 2);
      });
    });
}

$(() => readJson());
$(() => readMoreJson());


let HornMaker = function(catchall, page){
  this.image_url = catchall.image_url;
  this.title = catchall.title;
  this.description = catchall.description;
  this.horns = catchall.horns;
  this.keyword = catchall.keyword;
  this.page = page;
  if(page === 1) {
    this.class= 'one';
    hornedBeasts.push(this);
  }
  else if(page === 2) {
    this.class= 'two';
    moreHornedBeasts.push(this);
  }
};

HornMaker.prototype.menu = function () {
  $('select').append('<option class = "option"></option>');
  let $option =$('option[class="option"]');
  $option.attr('value', this.keyword);
  $option.text(this.keyword);

  $option.removeClass('option');
};

HornMaker.prototype.render = function(){
  //$('div').hide();
  $('main').append('<div class="clone"></div>');
  let $clone = $('div[class="clone"]');
  let photoTemplate = $('#photo-template').html();
  $clone.html(photoTemplate);
  $clone.find('h1').text(this.title);
  $clone.find('p').text(this.description);
  $clone.find('img').attr('src', this.image_url);
  $clone.removeClass('clone');
  $clone.attr('class', this.keyword );
  $clone.attr('name', 'hide' );
  
};

function renderMoreBeasts() {
  moreHornedBeasts.forEach(beast => {
    let mainy = $('div[name="hide"]').hide();
    console.log(beast);
    beast.render();
  });
}

//button for additional horned beasts
let buttonForMoreBeasts = $('button[name=placeholder]').on('click',renderMoreBeasts);

console.log(hornedBeasts, moreHornedBeasts); 

//filtering through both jSon pages
// function hideClass () {
//   let classOne = $('div[name="hide"]').val();
//   classOne.hide();
// }

// hideClass();


// select box filtering

$('select[name="horned"]').on('change', function() {
  let $selection = $(this).val();
  $('div').hide();
  $(`div[class="${$selection}"]`).show();
});



$(document).ready(function() {
  $('.tab-content').hide();
});


