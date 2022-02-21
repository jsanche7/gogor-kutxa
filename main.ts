input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    pins.servoWritePin(AnalogPin.P0, 106)
})
input.onButtonPressed(Button.A, function () {
    Sarrera = "" + Sarrera + "A"
})
input.onButtonPressed(Button.AB, function () {
    if (Pasahitza == Sarrera) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 180)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(500)
    basic.clearScreen()
    Sarrera = ""
})
input.onButtonPressed(Button.B, function () {
    Sarrera = "" + Sarrera + "B"
})
let Sarrera = ""
let Pasahitza = ""
Pasahitza = "AABA"
Sarrera = ""
pins.servoWritePin(AnalogPin.P0, 106)
