
/*let secretParagraphWedding = getElementById('wedding-paragraph');
let secretImageWedding = getElementById('wedding-image');
let secretWeddingbutton = getElementById('wedding-button');

let secretParagraphBusiness = getElementById('business-paragraph');
let secretImageBusiness = getElementById('business-image');
let secretBusinessbutton = getElementById('business-button');
*/
function toggle () {
    var x = document.getElementById("wedding-paragraph");
    var y = document.getElementById("wedding-image")

if (x.style.display === "block" && y.style.display === "inline-block") {
    x.style.display = "none";
    y.style.display = "none"
}
else {
    x.style.display = "block";
    y.style.display = "inline-block"
}
}

function toggle2(){
    var x = document.getElementById("business-paragraph");
    var y = document.getElementById("business-image")
   
    if (x.style.display === "block" && y.style.display === "inline-block") {
    x.style.display = "none";
    y.style.display = "none"
}
else {
    x.style.display = "block";
    y.style.display = "inline-block"
}
}