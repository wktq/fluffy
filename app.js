$('.list.has-child .list-parent').on('click', function() {
  if($(this).parents('.list').find('.list-child').length){
    $(this).parents('.list').toggleClass('child-open');
  }
});

$(document).on('scroll', function () {
  console.log($('body').offset().top);
  console.log($('.fixed-content').offset().top);
});
