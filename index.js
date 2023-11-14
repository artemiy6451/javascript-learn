document.addEventListener('DOMContentLoaded', function (){
   let form_button = document.getElementById('register-form__submit-button');
   let form_input_password  = document.getElementById('register-form__password');

   form_input_password.addEventListener('click', function (event) {
       delete_old_message("error");
       delete_old_message("success");
   });

   form_button.addEventListener('click', function (event){
       delete_old_message("error");
       delete_old_message("success");
       event.preventDefault();
       const register_elements = search_register_elements();
       valid_password(register_elements.password.value, register_elements.submit_password.value);
       create_message("Register confirm!", "success");
   });

   const valid_password = (password, submit_password) => {
       if (password.length < 8){
          create_message("Password must be least 8 symbols", "error");
       } else if (password !== submit_password){
           create_message("Password doesn't match", "error");
           return 0;
       }
   };

   const search_register_elements = () => {
       return {
           email: document.getElementById('register-form__email'),
           password: document.getElementById('register-form__password'),
           submit_password: document.getElementById('register-form__submit-password'),
           username: document.getElementById('register-form__username'),
       }
   };

   const create_message = (msg, type) => {
       let error_element = document.createElement('div');
       let register_form = document.getElementById('register-form-id');

       error_element.textContent = msg;
       error_element.id = `register-form__${type}-message`;

       register_form.appendChild(error_element);
   };

   const delete_old_message = (type) => {
       let error_element = document.getElementById(`register-form__${type}-message`);
       if (error_element !== null) {
           error_element.remove()
       }
   };
})