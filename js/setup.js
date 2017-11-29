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


// рандомно генерирует массив из четырех волшебников-объектов
var wizards = [{}];
for (var i = 0; i < 4; i++) {
  wizards.push({
    name: generateWizardName(),
    coatColor: getRandomArrayItem(WIZARRDS_COAT_COLORS),
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
// document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var setupSubmit = document.querySelector('.setup-submit');


var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscDown);
};


// открывает попап, по нажатию Esc = закрывает, кроме случая, когда input в фокусе
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

var onPopupEscDown = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

setupOpen.addEventListener('click', openPopup);

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', closePopup);

setupSubmit.addEventListener('click', function (evt) {
  closePopup();
  evt.preventDefault();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});
