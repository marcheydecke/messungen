index = 0

def on_button_a():
    global index
    index = 0
    datalogger.delete_log(datalogger.DeleteType.FAST)
    for index2 in range(12):
        index += 1
        datalogger.include_timestamp(FlashLogTimeStampFormat.SECONDS)
        datalogger.log(datalogger.create_cv("index", index),
            datalogger.create_cv("Temperatur", input.temperature()),
            datalogger.create_cv("B-Feld-X", input.magnetic_force(Dimension.STRENGTH)),
            datalogger.create_cv("Lautstaerke", input.sound_level()))
        datalogger.mirror_to_serial(True)
        basic.show_string("" + str(index))
        basic.pause(5000)
    basic.show_string("END")
input.on_button_event(Button.A, input.button_event_click(), on_button_a)
