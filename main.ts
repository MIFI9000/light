basic.forever(function () {
    if (input.lightLevel() > 50) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, input.lightLevel())
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    }
})
