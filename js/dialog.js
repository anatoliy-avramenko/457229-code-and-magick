'use strict';

// ---------------------------------------------------------------------------
// ОБРАБОТЧИКИ
// ---------------------------------------------------------------------------

(function () {

  // закрывает окно и срабатывает на Esc
  var closePopup = function () {
    window.global.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscDown);
  };


  // открывает попап, по нажатию Esc - закрывает, кроме случая, когда input в фокусе
  var openPopup = function () {
    window.global.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscDown);
    window.global.setupUserName.addEventListener('blur', function () {
      document.addEventListener('keydown', onPopupEscDown);
    });
    window.global.setupUserName.addEventListener('focus', function () {
      document.removeEventListener('keydown', onPopupEscDown);
    });
  };


  // закрывает окно по Esc
  var onPopupEscDown = function (evt) {
    if (evt.keyCode === window.global.ESC_KEYCODE) {
      closePopup();
    }
  };


  // открывает по клику
  window.global.setupOpen.addEventListener('click', openPopup);

  // открывает по нажатию на Enter
  window.global.setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.global.ENTER_KEYCODE) {
      openPopup();
    }
  });


  // закрывает по клику
  window.global.setupClose.addEventListener('click', closePopup);

  // закрывает по нажатию на Enter
  window.global.setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.global.ENTER_KEYCODE) {
      closePopup();
    }
  });

})();

