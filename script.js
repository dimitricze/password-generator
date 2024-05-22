const print = console.log
generate = function() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    var charactersLength = characters.length;

    for ( var i = 0; i <= document.getElementById('length').value; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    document.getElementById('password').value = result;
    return result;
}

copyToClipboard = function() {
  var password = document.getElementById("password");
  password.select();
  password.setSelectionRange(0, 99999); // for mobile devices

  navigator.clipboard.writeText(password.value);
  alert("password copied to clipboard");
}

defaultValue = function() {
  var length = document.getElementById('length');
  var length_text = document.getElementById('length_text');

  length.value = 16;
  length_text.value = 'password length: ' + length.value
}

defaultValue(); // sets default 'password range' value
generate(); // when user loads the page, a password is already generated