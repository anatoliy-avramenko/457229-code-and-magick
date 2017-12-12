'use strict';

// ---------------------------------------------------------------------------
// ОБРАБОТЧИКИ
// ---------------------------------------------------------------------------

(function () {

  // закрывает окно и срабатывает на Esc
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscDown);
  };


  // открывает попап, по нажатию Esc - закрывает, кроме случая, когда input в фокусе
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscDown);
    setupUserName.addEventListener('blur', function () {
      document.addEventListener('keydown', onPopupEscDown);
    });
    setupUserName.addEventListener('focus', function () {
      document.removeEventListener('keydown', onPopupEscDown);
    });
  };


  // закрывает окно по Esc
  var onPopupEscDown = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };


  // открывает по клику
  setupOpen.addEventListener('click', openPopup);

  // открывает по нажатию на Enter
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });


  // закрывает по клику
  setupClose.addEventListener('click', closePopup);

  // закрывает по нажатию на Enter
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

})();

