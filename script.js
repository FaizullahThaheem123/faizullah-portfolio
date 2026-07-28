// ======================
// Preloader
// ======================


window.onload = function(){


    let loader = document.getElementById("preloader");


    if(loader){


        loader.style.display = "none";


    }


};




// ======================
// Typing Effect
// ======================


let text = "Electrician | Industrial Electrical Maintenance | Web Development Learner";


let index = 0;


let typingBox = document.getElementById("typing");



function typing(){


    if(typingBox && index < text.length){


        typingBox.innerHTML += text.charAt(index);


        index++;


        setTimeout(typing,100);


    }


}



typing();// ======================
// Dark Mode
// ======================


function toggleDarkMode(){


    document.body.classList.toggle("dark");


}// ======================
// Top Button
// ======================


let topBtn = document.getElementById("topBtn");



window.onscroll = function(){


    if(document.documentElement.scrollTop > 200){


        if(topBtn){

            topBtn.style.display = "block";

        }


    }else{


        if(topBtn){

            topBtn.style.display = "none";

        }


    }


};




function topFunction(){


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });


}// ======================
// Visitor Counter
// ======================


let visitors = localStorage.getItem("visitors");



if(visitors == null){


    visitors = 1;


}else{


    visitors++;


}



localStorage.setItem("visitors", visitors);




let count = document.getElementById("visitorCount");



if(count){


    count.innerHTML = visitors;


}