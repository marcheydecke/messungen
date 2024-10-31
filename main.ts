let index = 0
basic.forever(function () {
    index += 1
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
    datalogger.log(
    datalogger.createCV("", index),
    datalogger.createCV("Temperatur", input.temperature()),
    datalogger.createCV("B-Feld-X", input.magneticForce(Dimension.Strength))
    )
    datalogger.mirrorToSerial(true)
    basic.pause(5000)
})
