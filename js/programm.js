$(document).ready(function(){

  $('#encrypt-form').on('submit', function(){
    var for_encrypt_text = $('#encrypt').val();
    encrypt(for_encrypt_text);
    return false;
  });
  $('#decrypt-form').on('submit', function(){
    var for_decrypt_text = $('#decrypt').val();
    decrypt(for_decrypt_text);
    return false;
  });
  $('.reset-btn').on('click', reset_form);
  $('.copy-btn').on('click', copy_result);


// Encrypt function
  function encrypt(for_encrypt_text){
    var encrypt_array = [],
        upper_row = [],
        lower_row = [],
        encrypt_result = '';

    //  get letters array from string
    encrypt_array = for_encrypt_text.toUpperCase().replace(/[/\s.,!@?;]*/g, '').split('');
    // sort letters to upper and lower rows
    for (var i = 0; i <  encrypt_array.length; i++) {
      if (i%2 == 0) {
        upper_row.push(encrypt_array[i]);
      } else {
        lower_row.push(encrypt_array[i]);
      }
    }
    //  join two rows in one
    var encrypt_result = upper_row.join('') + lower_row.join('');
    //  show encripted string in result block
    $('#result').val(encrypt_result);
    clear_copy();
  }
//  Decrypt function
function decrypt(for_decrypt_text){
  var decrypt_array = [],
      delimiter = 0,
      upper_row = [],
      lower_row = [],
      decrypt_result = '';
  //  get letters array from decrypt string
  decrypt_array = for_decrypt_text.toLowerCase().split('');
  //  get delmiter for our upper and lower rows
  delimiter = Math.ceil(decrypt_array.length / 2);
  //  Split leters array fortwo rows
  upper_row = decrypt_array.slice(0, delimiter);
  lower_row = decrypt_array.slice(delimiter);
  //  Join two rows into decrypted string
  for (var i = 0; i < delimiter; i++) {
    decrypt_result += upper_row[i];
    if (lower_row[i]) {
      decrypt_result += lower_row[i];
    }
  }
  //  write result in result block
  $('#result').val(decrypt_result);
  clear_copy();
}
//  Reset forms function
  function reset_form(){
    var textarea = $(this).parent().children('textarea');
    $(textarea).val('');
    $('#result').val('');
    clear_copy();
  }
//  Copy result function
  function copy_result(){
    $('#result').select();
    document.execCommand('copy');
    $(this).addClass('succefull');
    $('.copy-btn').html('copied');
    return false;
  }
//  Clear copy btn
  function clear_copy(){
    $('.copy-btn').removeClass('succefull');
    $('.copy-btn').html('copy');
  }

});
