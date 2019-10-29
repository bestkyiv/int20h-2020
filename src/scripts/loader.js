function loadCompleted() {
    
    console.log('completed');
    test = setTimeout(showContainer, 3000);
}

function showContainer() {
    document.getElementsByClassName('loader').item(0).style.display = "none";
    document.getElementsByClassName('container').item(0).style.display = "flex";
    AOS.init();
}