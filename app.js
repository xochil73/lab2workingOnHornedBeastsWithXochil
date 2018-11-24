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
        differentGeneric.menu();
      });
    });
}

$(() => readJson());


let HornMaker = function(catchall){
  this.image_url = catchall.image_url;
  this.title = catchall.title;
  this.description = catchall.description;
  this.horns = catchall.horns;
  this.keyword = catchall.keyword;
  hornedBeasts.push(this);
};

HornMaker.prototype.menu = function () {
  $('select').append('<option class = "option"></option>');
  let $option =$('option[class="option"]');
  $option.attr('value', this.keyword);
  $option.text(this.keyword);
  
  $option.removeClass('option');
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
  $clone.attr('class', this.keyword);
};




// select box filtering

$('select[name="horned"]').on('change', function() {
  let $selection = $(this).val();
  $('div').hide()
  $(`div[class="${$selection}"]`).show()
})



$(document).ready(function() {
  $('.tab-content').hide()
})


