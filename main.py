index = 0

def on_forever():
    global index
    index += 1
    datalogger.include_timestamp(FlashLogTimeStampFormat.SECONDS)
    datalogger.log(datalogger.create_cv("", index),
        datalogger.create_cv("Temperatur", input.temperature()),
        datalogger.create_cv("B-Feld-X", input.magnetic_force(Dimension.STRENGTH)))
    datalogger.mirror_to_serial(True)
    basic.pause(5000)
basic.forever(on_forever)
