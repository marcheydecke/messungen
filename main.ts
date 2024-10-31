input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index2 = 0; index2 < 12; index2++) {
        index += 1
        datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
        datalogger.log(
        datalogger.createCV("", index),
        datalogger.createCV("Temperatur", input.temperature()),
        datalogger.createCV("B-Feld-X", input.magneticForce(Dimension.Strength)),
        datalogger.createCV("Lautstärke", input.soundLevel())
        )
        datalogger.mirrorToSerial(true)
        basic.pause(5000)
    }
    basic.showString("END")
})
let index = 0
index = 0
