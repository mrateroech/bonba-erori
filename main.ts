input.onButtonPressed(Button.A, function () {
    bonba.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        bonba.set(LedSpriteProperty.X, 2)
        basic.pause(500)
        bonba.set(LedSpriteProperty.X, 0)
        basic.pause(500)
        bonba.set(LedSpriteProperty.X, 0)
        basic.pause(500)
        bonba.set(LedSpriteProperty.X, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    bonba.move(1)
})
let bonba: game.LedSprite = null
bonba = game.createSprite(2, 4)
