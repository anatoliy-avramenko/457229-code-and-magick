'use strict';


(function () {

  // константы для создания массива четырех волщебников-объектов
  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];





  // функция, служащая параметром в методе array.sort (для рандомной сортировки)
  var randomizeSort = function () {
    return Math.random() > 0.5 ? -1 : 1;
  };


  // случайное полное имя, где имя и фамилия находятся в случайном порядке
  var wizardFullName = [];
  var generateWizardName = function () {
    var wizardName = getRandomArrayItem(WIZARDS_NAMES);
    var wizardSurname = getRandomArrayItem(WIZARDS_SURNAMES);
    wizardFullName = [wizardName, wizardSurname];
    return wizardFullName.sort(randomizeSort()).join(' ');
  };


  // рандомно генерирует массив из четырех волшебников-объектов
  var wizards = [{}];
  for (var i = 0; i < 4; i++) {
    wizards.push({
      name: generateWizardName(),
      coatColor: getRandomArrayItem(WIZARDS_COAT_COLORS),
      eyesColor: getRandomArrayItem(WIZARDS_EYES_COLORS)
    });
  }
  wizards.shift();


  // темплейт волшебника
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // список для складывания волшебников
  var wizardList = document.querySelector('.setup-similar-list');


  // задать волшебнику параметры
  var createWizard = function (wizard) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };


  // записать параметры волшебника в разметку
  var fragment = document.createDocumentFragment();
  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(createWizard(wizards[j]));
  }
  wizardList.appendChild(fragment);


  // раcхайдить скрытые элементы
  document.querySelector('.setup-similar').classList.remove('hidden');

})();

