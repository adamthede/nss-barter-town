(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('.togglelink').click(loadLoginPop);
    $('.togglelinkreg').click(loadRegistrationPop);
    $('.loginButton').click(loginUser);
  }

  function loginUser(event){
    var url = '/login';
    var type = 'POST';
    var data = $('#login-data').serialize();
    var success = reloadPage;

    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function reloadPage(data){
    console.log(data);
    if (data.success){
      location.reload();
    }
  }
  function loadRegistrationPop(){
    $('.test').fadeIn(500);
    $('.login-form-reg').fadeIn(800);
  }

  function loadLoginPop(){
    $('.test').fadeIn(500);
    $('.login-form').fadeIn(800);
  }

})();

