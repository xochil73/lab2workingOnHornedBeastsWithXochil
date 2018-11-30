let hornedBeasts = [];
let moreHornedBeasts = [];

function readJson () {
  
  $.get('page-1.json', 'json')
    .then(data => {
      data.forEach(generic =>{
        new HornMaker(generic, 1);
      });
      hornedBeasts.forEach( (horn) => {
        $('#photo-template').append(horn.toHtml());
        horn.menu();
        ;
      } );  
      
    })
    
}

function readMoreJson () {
  console.log('reading more json'); 
  $.get('page-2.json', 'json')
    .then(data => {
      data.forEach(moreData => {
        new HornMaker(moreData, 2);
      });
      moreHornedBeasts.forEach( (horn) => {
        $('#photo-template').append(horn.toHtml());
        console.log('trying again');
      } );
    });
}

$(() => readJson());
// $(() => readMoreJson());


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

// function renderMoreBeasts() {
//   let mainy = $('div[name="hide"]').hide();
//   moreHornedBeasts.forEach(beast => {
//     beast.render();
//   });
// }

// function renderOriginalBeasts() {
//   let mainy = $('div[name="hide"]').hide();
//   hornedBeasts.forEach(beast => {
//     beast.render();
//   });
// }
//button for additional horned beasts
$('button[name=placeholder]').on('click', function(){

readMoreJson();
}
);
//button to go back to original images
$('button[name=original_images]').on('click', readMoreJson);

// select box filtering

$('select[name="horned"]').on('change', function() {
  let $selection = $(this).val();
  $('div').hide();
  $(`div[class="${$selection}"]`).show();
});






$(document).ready(function() {
  $('.tab-content').hide();
});


