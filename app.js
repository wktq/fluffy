$('.list.has-child .list-parent').on('click', function() {
  if($(this).parents('.list').find('.list-child').length){
    $(this).parents('.list').toggleClass('child-open');
  }
});

$('.list').on('click', function() {
  hashContentChange();
});

$(document).on('scroll', function () {
  console.log($('body').offset().top);
  console.log($('.fixed-content').offset().top);
});


function hashContentChange() {
  if (location.hash) {
    setTimeout(function(){
      var hash = location.hash.substr(1);
      hashContentShow(hash);
    },50);
  }
}

function hashContentShow(hash) {
  $('[data-hash-content]').hide();
  $('[data-hash-content="' + hash + '"]').show();
  $('[data-hash-list]').removeClass('active');
  $('[data-hash-list="' + hash + '"]').addClass('active');
  $('.hash-name').text(hash);
}

hashContentChange();
