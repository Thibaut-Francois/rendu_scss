document.getElementById("btn_top").addEventListener("click", function() {
    document.getElementById('top').scrollIntoView({behavior: "smooth"})
});

document.getElementById("btn1").addEventListener("click", function() {
    document.getElementById('section1').scrollIntoView({behavior: "smooth"})
});

document.getElementById("btn2").addEventListener("click", function() {
    document.getElementById('section2').scrollIntoView({behavior: "smooth"})
});

document.getElementById("btn3").addEventListener("click", function() {
    document.getElementById('section3').scrollIntoView({behavior: "smooth"})
});

document.getElementById("btn4").addEventListener("click", function() {
    document.getElementById('section4').scrollIntoView({behavior: "smooth"})
});

document.getElementById("btn5").addEventListener("click", function() {
    document.getElementById('section5').scrollIntoView({behavior: "smooth"})
});

document.getElementById("btn6").addEventListener("click", function() {
    document.getElementById('section6').scrollIntoView({behavior: "smooth"})
});

document.getElementById("btn7").addEventListener("click", function() {
    document.getElementById('section7').scrollIntoView({behavior: "smooth"})
});

document.getElementById("btn8").addEventListener("click", function() {
    document.getElementById('section8').scrollIntoView({behavior: "smooth"})
});

document.getElementById("btn9").addEventListener("click", function() {
    document.getElementById('section9').scrollIntoView({behavior: "smooth"})
});


document.getElementById("light_mode").addEventListener("click", function() {
    if (document.getElementById("body").classList=="dark"){

        document.getElementById('body').classList.remove("dark");
        document.getElementById('body').classList.add("bright");
        console.log('noir -> blanc')
    }else{

        document.getElementById('body').classList.remove("bright");
        document.getElementById('body').classList.add("dark");
        console.log('blanc -> noir')
    }
});