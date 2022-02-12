AFRAME.registerComponent("player-movement", {
  schema: {},

  init: function () {
    this.move();
  },

  move: function () {
    window.addEventListener("keydown", (e) => {
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
      ) {
        var e = document.querySelector("#sound-2");
        e.components.sound.playSound();
      }
    });
  },
});
