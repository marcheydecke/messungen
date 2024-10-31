def on_button_a():
    global index
    index += 1
    datalogger.include_timestamp(FlashLogTimeStampFormat.SECONDS)
    datalogger.log(datalogger.create_cv("", index),
        datalogger.create_cv("Temperatur", input.temperature()),
        datalogger.create_cv("B-Feld-X", input.magnetic_force(Dimension.STRENGTH)))
    datalogger.mirror_to_serial(True)
    basic.pause(5000)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

index = 0
index = 0