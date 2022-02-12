AFRAME.registerComponent("tank-bullet", {
  init: function () {
    setInterval(this.shootEnemy, 2000);
  },

  shootEnemy: function () {
    var e = document.querySelectorAll(".enemy");
    for (var m = 0; m < e.length; m++) {
      var newBullet = document.createElement("a-entity");
      newBullet.setAttribute("geometry", {
        primitive: "sphere",
        radius: 0.1,
      });
      newBullet.setAttribute("material", "color", "#000000");
      var pos = e[m].getAttribute("position");
      newBullet.setAttribute("position", {
        x: pos.x + 1.5,
        x: pos.y + 3.5,
        z: pos.z,
      });
      var scene = document.querySelector("#scene");
      scene.appendChild(newBullet);
      var position1 = new THREE.Vector3();
      var position2 = new THREE.Vector3();
      var player = document.querySelector("#weapon").object3D;
      var tankEnemy = e[m].object3D;
      player.getWorldPosition(position1);
      tankEnemy.getWorldPosition(position2);

      var direction = new THREE.Vector3();
      direction.subVectors(position1, position2).normalize();

      newBullet.setAttribute("velocity", direction.multiplyScalar(10));
      newBullet.setAttribute("dynamic-body", {
        shape: "sphere",
      });

      var countLife = document.querySelector("#life");
      var text_of_life_count = parseInt(countLife.getAttribute("text").value);

      newBullet.addEventListener("collide", (e) => {
        if (e.detail.body.el.id === "weapon") {
          if (text_of_life_count > 0) {
            text_of_life_count -= 1;
            countLife.setAttribute("text", {
              value: text_of_life_count,
            });
          }

          if (text_of_life_count <= 0) {
            var text = document.querySelector("#over");
            var allEl = document.querySelectorAll(".enemy");
            text.setAttribute("visible", true);

            for (i = 0; i < allEl.length; i++) {
              scene.removeChild(allEl[i]);
            }
          }
        }
      });
    }
  },
});
