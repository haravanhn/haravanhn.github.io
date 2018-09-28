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

  $("#contact-form").submit(function(e){
    e.preventDefault();
    $("#loading").show();
    var name = $('#name').val();
    var phone = $('#phone').val();
    if (!name && !phone) return;
    else {
      $.post({
        url : 'https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSflkbXmiObI30IWeWOFujtBC7MhcvJ2eOWo7c9l0pe25byKIQ/formResponse',
        data: {
          "entry.1637794751" : phone,
          "entry.945640530"  : name
        },
        headers: {
          // origin: 'haravanhn.github.io'
        },
        success: function() {
          $("#loading").hide();
          $("#modal-body").hide();
          $("#modal-headline").html("Cảm ơn bạn đã để lại thông tin! Haravan sẽ tư vấn cho bạn sớm nhất có thể.");
        },
        error: function () {
          $("#loading").hide();
          alert("Đã có lỗi xảy ra, vui lòng thử lại.");
        }
      })
    }
  })

  $("#trial-button").click(function(e) {
    e.preventDefault();
    $("#trial-text").hide();
    $("#loading-email").show();
    var email = $("#email").val();
    if (email) {
      $.post({
        url : 'https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSflkbXmiObI30IWeWOFujtBC7MhcvJ2eOWo7c9l0pe25byKIQ/formResponse',
        data: {
          "entry.246802766" : email
        },
        headers: {
          origin: 'https://haravanhn.github.io'
        },
        success: function() {
          $("#loading-email").hide();
          $("#trial-text").show();
          window.location.href = "https://www.haravan.com/?registry=true&ref=mienbac&hchan=thanh.phamduc-hanoi";
        },
        error: function () {
          $("#loading-email").hide();
          $("#trial-text").show();
          window.location.href = "https://www.haravan.com/?registry=true&ref=mienbac&hchan=thanh.phamduc-hanoi";
        }
      })
    } else {
      window.location.href = "https://www.haravan.com/?registry=true&ref=mienbac&hchan=thanh.phamduc-hanoi";
    }
  })

  $("#outer-omnichannel").click(function(){
    window.location.href = "https://www.haravan.com/omnichannel/?ref=mienbac&hchan=thanh.phamduc-hanoi";
  })

  $("#omni-shadow").click(function(){
    window.location.href = "https://www.haravan.com/omnichannel/?ref=mienbac&hchan=thanh.phamduc-hanoi";
  })

  $("#omni-img-res").click(function(){
    window.location.href = "https://www.haravan.com/omnichannel/?ref=mienbac&hchan=thanh.phamduc-hanoi";
  })

  $("#outer-omniinfo").click(function(){
    window.location.href = "https://www.haravan.com/omnichannel/?ref=mienbac&hchan=thanh.phamduc-hanoi";
  })
})

function showModal() {
  $("#modal-body").show();
  $("#modal-headline").html("Đăng kí để nhận được tư vấn từ chúng tôi");
  $("#loading").hide();
  $('#backdrop').show(300, function(){
    $('#custom-modal').show(300);
  });
}

function hideModal() {
  $('#custom-modal').hide(300, function(){
    $('#backdrop').hide(300);
  })
}