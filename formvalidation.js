
<script>
    $(document).ready(function(){
        $('.form_submit_common').off('submit').on('submit', function(event) {
         
            if(!checkEmail()) {
					toastr.error('Please fill the correct email');
                    return false
			}

        $('#email_2').on('input', function() {
          checkEmail();
        });

        // email validation 
        function checkEmail() {
        var pattern1 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $('#email_2').val();
        var validemail = pattern1.test(email);
        if (email == "") {
            $('#email_2').addClass('border-important');
            return false;
        } else if (!validemail) {
            $('#email_2').addClass('border-important');
            return false;
        } else {
            $('#email_2').removeClass('border-important');
            return true;
        }
        }

          // mobile number validate 

      function checkmobile() {
			if (!$.isNumeric($("#mobile").val())) {
				$("#mobile").addClass('border-important');
				return false;
			} else if ($("#mobile").val().length < 10) {
				$("#mobile").addClass('border-important');
				return false;
			} else if ($("#mobile").val().length > 13) {
				$("#mobile").addClass('border-important');
				return false;
			} else {
				$("#mobile").removeClass('border-important');
				return true;
			}
		}
    })
    })
</script>
