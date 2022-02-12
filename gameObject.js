AFRAME.registerComponent("boxes", {
  schema: {
    width: { type: "number", default: 3 },
    height: { type: "number", default: 3 },
    depth: { type: "number", default: 3 },
  },

  init: function () {
    this.createBox();
  },

  createBox: function () {
    px = [
      22.86, -17.35, -12.81, 0.44, -30.18, -25.89, 15.61, 29.68, 11.95, -15.4,
      -14.09, 34.76, 2.29, 21.77, 1.57, 34.72, 12.04, -10.9, 6.48, 15.66,
    ];
    pz = [
      54.56, -4.71, 14.91, 56.74, 41.13, 50.76, 57.84, 7.02, -5.24, -26.82,
      27.59, -35.78, 34.52, 31.32, -9.22, 26.72, 48.9, 27.24, 9.94, 54.29,
    ];
    for (var i = 0; i < 20; i++) {
      var box = document.createElement("a-entity");
      box.setAttribute("id", `box${i}`);
      var posX = px[i];
      var posZ = pz[i];
      var posY = 1;
      var position = { x: posX, y: posY, z: posZ };
      box.setAttribute("position", position);
      box.setAttribute("geometry", {
        primitive: "box",
        width: this.data.width,
        height: this.data.height,
        depth: this.data.depth,
      });
      box.setAttribute("material", {
        src: "./images/boxtexture1.jpg",
        repeat: "1 1 1",
      });
      box.setAttribute("static-body", {});

      var parent = document.querySelector("#scene");
      parent.appendChild(box);
    }
  },
});

AFRAME.registerComponent("fences", {
  init: function () {
    this.createFence();
  },

  createFence: function () {
    var posX = -20;
    var posZ = 85;

    for (var i = 0; i < 5; i++) {
      var fence1 = document.createElement("a-entity");
      var fence2 = document.createElement("a-entity");
      var fence3 = document.createElement("a-entity");
      var fence4 = document.createElement("a-entity");
      posX = posX + 5;
      posY = 2.5;
      posZ = posZ - 10;
      var scale = {
        x: 2,
        y: 2,
        z: 2,
      };
      fence1.setAttribute("id", "fence1" + i);
      fence2.setAttribute("id", "fence2" + i);
      fence3.setAttribute("id", "fence3" + i);
      fence4.setAttribute("id", "fence4" + i);
      fence1.setAttribute("position", {
        x: posX,
        y: posY,
        z: -35,
      });
      fence2.setAttribute("position", {
        x: posX,
        y: posY,
        z: 85,
      });
      fence3.setAttribute("position", {
        x: -30,
        y: posY,
        z: posZ,
      });
      fence4.setAttribute("position", {
        x: 50,
        y: posY,
        z: posZ,
      });
      fence1.setAttribute("scale", scale);
      fence2.setAttribute("scale", scale);
      fence3.setAttribute("scale", scale);
      fence4.setAttribute("scale", scale);
      fence1.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );
      fence2.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );
      fence3.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );
      fence4.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );
      fence1.setAttribute("static-body", {});
      fence2.setAttribute("static-body", {});
      fence3.setAttribute("static-body", {});
      fence4.setAttribute("static-body", {});
      fence3.setAttribute("rotation", {
        x: 0,
        y: 90,
        z: 0,
      });
      fence4.setAttribute("rotation", {
        x: 0,
        y: 90,
        z: 0,
      });
      var scene = document.querySelector("#scene");
      scene.appendChild(fence1);
      scene.appendChild(fence2);
      scene.appendChild(fence3);
      scene.appendChild(fence4);
    }
  },
});
