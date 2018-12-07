let hornedBeasts = [];
let moreHornedBeasts = [];

function readJson () {

  $('section').empty()
  hornedBeasts = []
  $.get('page-1.json', 'json')
    .then(data => {
      console.log('HITTING readJson function***')
      data.forEach(generic =>{
        new HornMaker(generic, 1);
      });
      hornedBeasts.forEach( (horn) => {
        $('#photo-template').append(horn.toHtml());
        horn.menu();
        
      });

    });

}

function readMoreJson () {
  $('section').empty()
  moreHornedBeasts = [];
  console.log('reading more json');
  $.get('page-2.json', 'json')
    .then(data => {
      data.forEach(moreData => {
        new HornMaker(moreData, 2);
      });
      console.log('MORE HORNED BEATSTSKF', moreHornedBeasts)
      moreHornedBeasts.forEach( (horn) => {
        $('#photo-template').append(horn.toHtml());
        // horn.menu();

      } );
    });
}

$(() => readJson());


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
  let $option = $('option[class="option"]');
  $option.attr('value', this.keyword);
  $option.text(this.keyword);

  $option.removeClass('option');
};



//Hornmaker  prototype//
HornMaker.prototype.toHtml = function() {
  let templateHtml = $('#horn-template').html();

  // 2. Use Handlebars to "compile" the HTML
  let compileHornTemplate = Handlebars.compile(templateHtml);
  // 3. Do not forget to return the HTML from this method
  let newHornTemplate = compileHornTemplate(this);

  return newHornTemplate;
};


//button for additional horned beasts
$('button[name=placeholder]').on('click', function(){
  console.log('HITTING THIS BUTTON')
  readMoreJson();
}
);
//button to go back to original images
$('button[name=original_images]').on('click', ()=>{
  console.log('HITTING ORIGINAL PAGE')
  readJson()
});



// select box filtering

$('select').on('change', function() {
  let $selection = $(this).val();
  
  console.log('DIVS TO HIDE',  $('section div').hide() )
  $('section div').hide();

  console.log('OPTION SELECTED', $selection)
  console.log($('section div'))
  $(`div[class="${$selection}"]`).show();
});






$(document).ready(function() {
  $('.tab-content').hide();
});


