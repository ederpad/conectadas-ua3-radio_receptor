radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onGesture(Gesture.Shake, function () {
    valor = randint(0, 9)
    radio.sendNumber(valor)
})
let valor = 0
radio.setGroup(1)
