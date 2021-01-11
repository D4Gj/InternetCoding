
function addUser(){
    const form = document.forms[1];

    form.addEventListener("submit", function(event) {

     event.preventDefault();
         var data = new FormData(form);
         var str = 'Вы зарегистрированы!';
         var doRedirect = true;
         var icon = "success";
	
        if (data.get('my_name') == '') 
        {           
            str ='Заполните Имя';
            icon = "error";
            doRedirect = false;
        }
        else if(data.get('email') == '') 
        {       
            str ='Заполните поле с электронной почтой';
            icon = "error";
            doRedirect = false;
        }
        else if(data.get('pass')== '')
        {
            str ='Заполните поле пароля';
            icon = "error";
            doRedirect = false;
        }
		else if(data.get('re_pass')== '')
        {
            str ='повторите пароль';
            icon = "error";
            doRedirect = false;
        }
		else if(data.get('re_pass')!=data.get('pass'))
        {
            str ='Пароли не совпадают!';
            icon = "error";
            doRedirect = false;
        }
		else if(document.getElementById("agree-term").checked==false)
        {
            str ='Вы не согласились с условиями соглашения!';
            icon = "error";
            doRedirect = false;
        }

        Swal.fire({
            text: str,
            icon: icon,
            showConfirmButton: false
        });

        if (doRedirect) {
            setTimeout(function () {
                
                window.location.href = "registerAndLogin.html";
            }, 1800); 
        }       
    });

    form.addEventListener("formdata", event => {
        console.log(event.formData);
    });
}