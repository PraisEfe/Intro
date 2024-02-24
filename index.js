// VARIABLE DECLARATION
const submit = document.getElementById('submit');
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("emailAddress");
const password = document.getElementById("password");
const input = document.getElementsByClassName('input');
const icon = document.getElementsByClassName('icon');
const done = document.getElementById('successful');
let error1 = document.querySelector('#error1');
let error2 = document.querySelector('#error2');
let error3 = document.querySelector('#error3');
let error4 = document.querySelector('#error4');

//ERROR ICON REMOVAL
firstName.classList.remove('icon');
lastName.classList.remove('icon');
emailAddress.classList.remove('icon');
password.classList.remove('icon');

//AUTOFILL EVENTS
firstName.addEventListener('change', function(){
    firstName.style.borderColor = 'gray';
    firstName.classList.remove('icon');
    error1.style.display = 'none';
})

lastName.addEventListener('change', function(){
    lastName.style.borderColor = 'gray';
    lastName.classList.remove('icon');
    error2.style.display = 'none';
})

emailAddress.addEventListener('change', function(){
    emailAddress.style.borderColor = 'gray';
    emailAddress.classList.remove('icon');
    error3.style.display = 'none';
})

password.addEventListener('change', function(){
    password.style.borderColor = 'gray';
    password.classList.remove('icon');
    error4.style.display = 'none';
})

//SUBMIT FUNCTION
submit.addEventListener('click', function(event){
    
    event.preventDefault()
    if(firstName.value.trim() === ''){
        console.log("Working");
        firstName.style.borderColor = 'red';
        firstName.classList.add('icon');
        error1.textContent = 'First Name cannot be empty';
        error1.style.display = 'block';
        error1.classList.add('error');
        done.style.display = 'none';
         //prompt if the FirstName field is empty    
    }
    // else{
    //     console.log("meh")
    //     error1.style.display = 'none';
    //     error1.textContent = ' ' //defaul
    // }


    if(lastName.value.trim() === ''){

        lastName.style.borderColor = 'red';
        lastName.classList.add('icon');
        error2.textContent = 'Last Name cannot be empty';
        error2.style.display = 'block';
        error2.classList.add('error');
        done.style.display = 'none';//prompt if lastName field is empty
    }
    // else{
    //     error2.style.display = 'none';
    //     error2.textContent = ' ';//default
    // }


    let pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    //  if(emailAddress.value.match(pattern)){
    //         console.log("valid email"); //This if statement evaulates to true if the input matches the regular expression
    //   }
      if(emailAddress.value.trim() === ''){
        emailAddress.style.borderColor = 'red';
        emailAddress.classList.add('icon');
        error3.textContent = 'Email Address cannot be empty';
        error3.style.display = 'block';
        error3.classList.add('error');
        emailAddress.value = ''; //clears email address filed
        done.style.display = 'none';  // else this error statement is prompted
          
      }else if(!emailAddress.value.match(pattern)){
        emailAddress.style.borderColor = 'red';
        emailAddress.classList.add('icon');
        error3.textContent = 'Looks like this is not an email';
        error3.style.display = 'block';
        error3.classList.add('error');
        emailAddress.value = ''; //clears email address filed
        done.style.display = 'none';  // else this error statement is prompted
      }

    

      if(password.value.trim() === ''){
        console.log('pass');
        password.style.borderColor = 'red';
        password.classList.add('icon');
        error4.textContent = 'Password cannot be empty';
        error4.style.display = 'block';
        error4.classList.add('error');
        done.style.display = 'none';//prompts if the password field is empty
        
      }else if(password.value.length < 8){
        password.style.borderColor = 'red';
        password.classList.add('icon');
        error4.textContent = 'Password must not be less than 8 characters';
        error4.style.display = 'block';
        error4.classList.add('error');
        password.value = ''; //clears password field
        done.style.display = 'none'; //prompts if the password is less than 8 characters
      }
    // else{
    //     error4.style.display = 'none';
    //     error4.textContent = ' ';//default
    // }

    if(firstName.value != '' && lastName.value != '' && emailAddress.value.match(pattern) && (password.value != '' && password.value.length >= 8)){
      done.style.display = 'block';
      done.textContent = 'Successful!';
      firstName.value = '';
      lastName.value = '';
      emailAddress.value = '';
      password.value = '';//CLEARS ALL INPUT FIELDS WHEN ALL FIELDS HAVE BEEN CORRECTLY FILLED AND DISPLAYS THE SUCCESS PROMPT
    }

})



//RETURNS THE INPUT FIELD BACK TO DEFAULT
firstName.addEventListener('click', function(){
    error1.style.display = 'none';
    firstName.style.borderColor = 'gray'; //This clears the effect of the validation function
    firstName.classList.remove('icon');
    done.style.display = 'none'; //removes successful prompt
  }
)

lastName.addEventListener('click', function(){
    error2.style.display = 'none';
    lastName.style.borderColor = 'gray'; //This clears the effect of the validation function
    lastName.classList.remove('icon');
    done.style.display = 'none'; //removes successful prompt
  }
)
emailAddress.addEventListener('click', function(){
    error3.style.display = 'none';
    emailAddress.style.borderColor = 'gray'; //This clears the effect of the validation function
    emailAddress.classList.remove('icon');
    done.style.display = 'none'; //removes successful prompt
  }
)
password.addEventListener('click', function(){
    error4.style.display = 'none';
    password.style.borderColor = 'gray'; //This clears the effect of the validation function
    password.classList.remove('icon');
    done.style.display = 'none'; //removes successful prompt
  }
)


/* 
append
createElement
setAttribute('id', 'attributename')
removeAttribute('id')
getAttribute
classList.add()
trim()
variable.addEventlistener('change', function)
*/
