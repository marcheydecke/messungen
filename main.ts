let index = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    index = 0
    datalogger.deleteLog(datalogger.DeleteType.Fast)
    for (let index2 = 0; index2 < 12; index2++) {
        index += 1
        datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
        datalogger.log(
        datalogger.createCV("index", index),
        datalogger.createCV("Temperatur", input.temperature()),
        datalogger.createCV("B-Feld-X", input.magneticForce(Dimension.Strength)),
        datalogger.createCV("Lautstaerke", input.soundLevel())
        )
        datalogger.mirrorToSerial(true)
        basic.showString("" + index)
        basic.pause(5000)
    }
    basic.showString("END")
})
