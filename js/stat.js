'use strict';

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
  ctx.lineTo(520, 20);
  ctx.lineTo(510, 50);
  ctx.lineTo(520, 100);
  ctx.lineTo(500, 150);
  ctx.lineTo(510, 200);
  ctx.lineTo(500, 220);
  ctx.lineTo(520, 270);
  ctx.lineTo(500, 280);
  ctx.lineTo(450, 260);
  ctx.lineTo(400, 280);
  ctx.lineTo(350, 270);
  ctx.lineTo(300, 280);
  ctx.lineTo(250, 260);
  ctx.lineTo(200, 280);
  ctx.lineTo(150, 270);
  ctx.lineTo(140, 280);
  ctx.lineTo(100, 250);
  ctx.lineTo(120, 200);
  ctx.lineTo(100, 150);
  ctx.lineTo(110, 100);
  ctx.lineTo(100, 50);
  ctx.closePath();
  ctx.stroke();
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
  ctx.fillText('Список результатов:', 140, 60);

};
