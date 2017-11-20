'use strict';

// typical functions

var getMaxItem = function (arr) {
  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

var sortAssociatedArrays = function (arr1, arr2) {
  for (var i = 0; i < arr1.length - 1; i++) {
    var max = arr1[i];
    for (var j = i + 1; j < arr1.length; j++) {
      if (arr1[j] > max) {
        max = arr1[j];
        var buffer1 = arr1[i];
        var buffer2 = arr2[i];
        arr1[i] = max;
        arr1[j] = buffer1;
        arr2[i] = arr2[j];
        arr2[j] = buffer2;
      }
    }
  }
  return [arr1, arr2];
};

window.renderStatistics = function (ctx, names, times) {

  // cloud canvas

  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'steelBlue';
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.moveTo(110, 10);
  ctx.lineTo(150, 20);
  ctx.lineTo(200, 10);
  ctx.lineTo(250, 15);
  ctx.lineTo(300, 10);
  ctx.lineTo(350, 20);
  ctx.lineTo(400, 15);
  ctx.lineTo(450, 10);
  ctx.lineTo(490, 20);
  ctx.lineTo(520, 50);
  ctx.lineTo(510, 80);
  ctx.lineTo(520, 100);
  ctx.lineTo(500, 150);
  ctx.lineTo(510, 200);
  ctx.lineTo(500, 220);
  ctx.lineTo(520, 250);
  ctx.lineTo(480, 280);
  ctx.lineTo(450, 275);
  ctx.lineTo(400, 280);
  ctx.lineTo(350, 275);
  ctx.lineTo(300, 280);
  ctx.lineTo(250, 275);
  ctx.lineTo(200, 280);
  ctx.lineTo(150, 275);
  ctx.lineTo(140, 280);
  ctx.lineTo(100, 250);
  ctx.lineTo(120, 200);
  ctx.lineTo(100, 150);
  ctx.lineTo(110, 100);
  ctx.lineTo(100, 50);
  ctx.closePath();
  ctx.stroke();

  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.fill();

  // text

  ctx.shadowColor = 'rgba(0, 0, 0, 0)';
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 140, 35);
  ctx.fillText('Список результатов:', 140, 55);

  sortAssociatedArrays(times, names);

  var histoHeight = 150;
  var histoHeightRatio = histoHeight / getMaxItem(times);
  var histoWidth = 40;
  var histoSpace = 50 + histoWidth;
  var histoX = 140;
  var histoY = 245;

  ctx.fillStyle = 'red';

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = 'blue';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.globalAlpha = Math.random();
    }
    ctx.fillRect(histoX + histoSpace * i, histoY, histoWidth, -times[i] * histoHeightRatio);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], histoX + histoSpace * i, histoY + 5);
    ctx.fillText(Math.floor(times[i]), histoX + histoSpace * i, histoY - times[i] * histoHeightRatio - 15);
  }

};

