let lapsCompleted = 0

function addLaps() {
    while (lapsCompleted < 3) {
        lapsCompleted = lapsCompleted + 1
        console.log(lapsCompleted)
    }
}

addLaps()
let txt = ""

function ForLoop() {
    
    const beans = ["Baked Beans", "Chicken Beans", "Kidney Beans", "Black Beans"];

    for (let i = 0; i <beans.length ; i++){
        let displaycontent = txt += beans[i]
        console.log(displaycontent)

        document.getElementById("txtdisplay").innerText = displaycontent
    }
    
}





