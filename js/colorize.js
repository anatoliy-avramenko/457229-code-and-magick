'use strict';


(function () {

  var setupWizardCoat = window.global.setup.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = window.global.setup.querySelector('.setup-wizard .wizard-eyes');
  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

  // меняет цвет мантии по клику
  setupWizardCoat.addEventListener('click', function () {
    setupWizardCoat.style.fill = window.global.getRandomArrayItem(window.global.WIZARDS_COAT_COLORS);
  });


  // меняет цвет глаз по клику
  setupWizardEyes.addEventListener('click', function () {
    setupWizardEyes.style.fill = window.global.getRandomArrayItem(window.global.WIZARDS_EYES_COLORS);
  });


  // меняет цвет файербола по клику
  setupWizardFireball.addEventListener('click', function () {
    setupWizardFireball.style.background = window.global.getRandomArrayItem(window.global.WIZARDS_FIREBALL_COLORS);
  });

})();

