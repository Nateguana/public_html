let angle = 0;

function onframe() {
    console.log("hello world")

    angle += .15
    let angle2 = angle * 1.5;
    // let rotation = 0
    document.body.style =
        "background-color:hsl(" + angle + "deg,100%,50%);--rotation:" + angle2 + "deg"

    setTimeout(onframe,10)
}

onframe()