function changeSlotToPrincipal(slot){
    mainSlot = document.getElementById("camera-principal");
    let slot1 = document.getElementById("camera-slot-1");
    let slot2 = document.getElementById("camera-slot-2");
    let slot3 = document.getElementById("camera-slot-3");
    let mainCameraSource = mainSlot.src;

    switch (slot){        
        case 1:
            mainSlot.src = slot1.src;
            slot1.src = mainCameraSource;
            break;
        case 2:
            mainSlot.src = slot2.src;
            slot2.src = mainCameraSource;
            break;
        case 3:
            mainSlot.src = slot3.src;
            slot3.src = mainCameraSource;
            break; 
    }
}