'use strict';

// константы для создания массива четырех волщебников-объектов
var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARRDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];


// функция, генерирующая случайное число в диапазоне bottom - top
var randomizeNumber = function (bottom, top) {
  return Math.floor((Math.random() * top) + bottom);
};


// функция, служащая параметром в методе array.sort (для рандомной сортировки)
var randomizeSort = function () {
  return Math.random() > 0.5 ? -1 : 1;
};


// возвратить рандомный array items
var getRandomArrayItem = function (array) {
  return array[randomizeNumber(0, array.length)];
};


// случайное полное имя, где имя и фамилия находятся в случайном порядке
var wizardFullName = [];
var generateWizardName = function () {
  var wizardName = getRandomArrayItem(WIZARDS_NAMES);
  var wizardSurname = getRandomArrayItem(WIZARDS_SURNAMES);
  wizardFullName = [wizardName, wizardSurname];
  return wizardFullName.sort(randomizeSort()).join(' ');
};


// массив из четырех рандомно генерируемых волшебников-объектов
var wizards = [
  {
    name: generateWizardName(),
    coatColor: getRandomArrayItem(WIZARRDS_COAT_COLORS),
    eyesColor: getRandomArrayItem(WIZARDS_EYES_COLORS)
  },
  {
    name: generateWizardName(),
    coatColor: getRandomArrayItem(WIZARRDS_COAT_COLORS),
    eyesColor: getRandomArrayItem(WIZARDS_EYES_COLORS)
  },
  {
    name: generateWizardName(),
    coatColor: getRandomArrayItem(WIZARRDS_COAT_COLORS),
    eyesColor: getRandomArrayItem(WIZARDS_EYES_COLORS)
  },
  {
    name: generateWizardName(),
    coatColor: getRandomArrayItem(WIZARRDS_COAT_COLORS),
    eyesColor: getRandomArrayItem(WIZARDS_EYES_COLORS)
  }
];

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
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(createWizard(wizards[i]));
}
wizardList.appendChild(fragment);


// раcхайдить скрытые элементы
document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

