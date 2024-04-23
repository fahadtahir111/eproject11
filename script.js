AOS.init();

function myfun(smallimg){
    let largeimg =document.getElementById('large-image');
    largeimg.src = smallimg.src;
}

TweenLite.to("#test", 5, {delay:1.5, scrambleText:{text:"I sure hope this works for you.", rightToLeft:true, chars:"lowercase"}})