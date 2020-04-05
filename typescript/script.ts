/// <reference path="./enchantjs.d.ts" />

enchant();
window.onload = function () {
  const game = new Game(400, 600);

  game.onload = function () {
    // ここにenchant.jsのコードを書く
  };
  game.start();
};
