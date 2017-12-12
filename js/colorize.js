'use strict';


(function () {

  var setupWizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var setupWizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var setupWizardFireball = document.querySelector('.setup-fireball-wrap');

  // меняет цвет мантии по клику
  setupWizardCoat.addEventListener('click', function () {
    setupWizardCoat.style.fill = getRandomArrayItem(WIZARDS_COAT_COLORS);
  });


  // меняет цвет глаз по клику
  setupWizardEyes.addEventListener('click', function () {
    setupWizardEyes.style.fill = getRandomArrayItem(WIZARDS_EYES_COLORS);
  });


  // меняет цвет файербола по клику
  setupWizardFireball.addEventListener('click', function () {
    setupWizardFireball.style.background = getRandomArrayItem(WIZARDS_FIREBALL_COLORS);
  });

})();

