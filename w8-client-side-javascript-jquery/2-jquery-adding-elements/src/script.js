// You run your code inside ready function when you are jQuery

$(document).ready(function () {
  
  // get the handles on the buttons

  $('.buy-btn').on('click',function(){

    const $section = $(this).closest('.coin-section');

    const $balance = $section.find(".balance");

    $balance.append(' 💵 ')      

  });
});
