/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// This is the Level1 Scene

/**
 * This class is the Level1 Scene.
 */
class Level1Scene extends Phaser.Scene {
  /**
   * This method is the construtor.
   */
  constructor() {
    super({ key: "level1Scene" })
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Level1 Scene")
    this.load.spritesheet("ninja", "./assets/images/sprites/ninja_girl/idle.png", {
      frameWidth: 37,
      frameHeight: 45,
    })
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    // create animation
    const ninjaIdel = this.anims.create({
      key: "idel",
      frames: this.anims.generateFrameNumbers("ninja"),
      frameRate: 6,
    })

    const sprite = this.add.sprite(50, 300, "ninja").setScale(0.5)

    sprite.play({ key: "idle", repeat: 10 })

    this.tweens.add({
      targets: sprite,
      x: 750,
      duration: 8800,
      ease: "Linear",
    })
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   *  @param {number} time - The current time.
   *  @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    // pass
  }
}

export default Level1Scene
