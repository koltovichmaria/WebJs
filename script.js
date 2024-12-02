document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
})

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
})

document.getElementById('feedbackForm').onsubmit = function(event) {
       event.preventDefault();
       const formData = new FormData(this);
       fetch('https://formcarry.com/s/wm5A3e-oM7P', {
           method: 'POST',
           body: formData
       })
       .then(response => {
           alert('Форма успешно отправлена!');
           localStorage.removeItem('formData');
           this.reset();
       })

       saveFormData();
   };

   function saveFormData() {
       const formData = {};
       const formElements = document.querySelectorAll('#feedbackForm .form-element input, #feedbackForm .form-element textarea');
       formElements.forEach(element => {
           formData[element.name] = element.value;
       });
       localStorage.setItem('formData', JSON.stringify(formData));
   }

   function loadFormData() {
       const savedData = JSON.parse(localStorage.getItem('formData'));
       if (savedData) {
           for (const key in savedData) {
               const element = document.querySelector(`input[name="${key}"], textarea[name="${key}"]`);
               if (element) element.value = savedData[key];
           }
       }
   }
