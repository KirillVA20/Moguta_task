'use strict'

$(document).ready( () => {
          $('.js-settings-form__link').click( function() {
            $(this).siblings('.settings-form__wrap').slideToggle(300);
            if ($(this).parent().hasClass('mobile-menu__settings--open')) {
              $(this).parent().removeClass('mobile-menu__settings--open');
            } else {
              $(this).parent().addClass('mobile-menu__settings--open');
            }
          })
        })

let set_form = document.querySelector('.js-settings-form__link');
let form_wrap = 'settings-form__wrap';

set_form.addEventListener("click", () => {
	if (!set_form.parent.classList.contains('mobile-menu__settings--open')) {
		set_form.nextElementSibling.classList.add('settings-form__wrap--open');
	} else {
		set_form.nextElementSibling.classList.remove('settings-form__wrap--open');
	}
});