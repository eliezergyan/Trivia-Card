$(document).ready(() =>{
  $('.hint-box').on('click', ()=> {
    $('.hint').slideToggle(450)
  })
  $('.wrong-answer-one').on('click', ()=> {
    $('.wrong-text-one').fadeOut();
    $('.correct-answer-text')
    $('.frown').show();
  })
  $('.wrong-answer-two').on('click', ()=> {
    $('.wrong-text-two').fadeOut();
    $('.correct-answer-text');
    $('.frown').show();
  })
  $('.wrong-answer-three').on('click', ()=> {
    $('.wrong-text-three').fadeOut();
    $('.correct-answer-text');
    $('.frown').show();
  })
  $('.correct-answer').on('click', ()=> {
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-text-one').fadeOut();
    $('.wrong-text-two').fadeOut();
    $('.wrong-text-three').fadeOut();
  })
});