'use strict';


(function () {
  window.global = {

    ENTER_KEYCODE: 13,
    ESC_KEYCODE: 27,
    WIZARDS_COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    WIZARDS_EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    WIZARDS_FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],

    setup: document.querySelector('.setup'),
    setupOpen: document.querySelector('.setup-open'),
    setupClose: document.querySelector('.setup-close'),
    setupUserName: window.global.setup.querySelector('.setup-user-name'),

    // функция, генерирующая случайное число в диапазоне bottom - top
    randomizeNumber: function (bottom, top) {
      return Math.floor((Math.random() * top) + bottom);
    },

    // возвратить рандомный array item
    getRandomArrayItem: function (array) {
      return array[window.gloabal.randomizeNumber(0, array.length)];
    }

  };
})();


