window.onload = function(){
  showModal();
}

$(document).ready(function(){
  $('#backdrop').click(function(){
    hideModal();
  })
  
  $('#close-modal').click(function(){
    hideModal();
  })

  $("#show-contact-form").click(function(){
    showModal();
  })
})

function showModal() {
  $('#backdrop').show(300, function(){
    $('#custom-modal').show(300);
  });
}

function hideModal() {
  $('#custom-modal').hide(300, function(){
    $('#backdrop').hide(300);
  })
}