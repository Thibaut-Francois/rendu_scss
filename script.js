document.querySelector("section.light_mode").addEventListener("click", function() {
    if (document.querySelector("#body").classList=="dark"){

        document.querySelector('#body').classList.remove("dark");
        document.querySelector('#body').classList.add("bright");
        console.log('noir -> blanc')

        document.querySelector('.btn_dark').src="img/moon_icon.png"
    }else{

        document.querySelector('#body').classList.remove("bright");
        document.querySelector('#body').classList.add("dark");
        console.log('blanc -> noir')

        document.querySelector('.btn_dark').src="img/sun_icon.png"
    }
});

document.querySelector("section.light_mode2").addEventListener("click", function() {
    if (document.querySelector("#body").classList=="dark"){

        document.querySelector('#body').classList.remove("dark");
        document.querySelector('#body').classList.add("bright");
        console.log('noir -> blanc')

        document.querySelector('.btn_responsive').src="img/moon_icon.png"
    }else{

        document.querySelector('#body').classList.remove("bright");
        document.querySelector('#body').classList.add("dark");
        console.log('blanc -> noir')

        document.querySelector('.btn_responsive').src="img/sun_icon.png"
    }
});






document.querySelector("#sub_menu").addEventListener("click", function() {
    if (document.querySelector("#sub_list").classList=="sub_menu_list sub_menu_class"){
        //console.log('AAA')
        document.querySelector('#sub_list').classList.remove("sub_menu_class");

    }else{

        //console.log('BBB')
        document.querySelector('#sub_list').classList.add("sub_menu_class");
    }
});