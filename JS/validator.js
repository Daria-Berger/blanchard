var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);
new JustValidate('.contacts__form', {
   rules: {
      name: {
         required: true,
         minLength: 3,
      },
      email: {
         required: true,
         email: true
      },
      tel: {
         required: true,
         function: () => {
             const phone = selector.inputmask.unmaskedvalue();
            //  alert(phone);
             return Number(phone) && phone.length===10;
         }
      },
   },
   messages: {
      name: 'Как вас зовут?',
      tel: 'Укажите ваш телефон'
   }
});