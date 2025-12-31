const snd = new Sound({source: "anvil_land.ogg", priority: true, loop: false, stream: false}).setVolume(2.0).setPitch(1);

register("chat", () => {

    Client.showTitle("&8&lWither Key", "Picked up", 0, 50, 0);

    snd.play();

}).setCriteria("RIGHT CLICK on a WITHER door to open it. This key can only be used to open 1 door!").setContains();

register("chat", () => {

    Client.showTitle("&c&lBlood Key", "Picked up", 0, 50, 0);

    snd.play();

}).setCriteria("RIGHT CLICK on the BLOOD DOOR to open it. This key can only be used to open 1 door!").setContains();
