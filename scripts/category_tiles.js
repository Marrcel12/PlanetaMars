var contents = []
for (var i =0; i<document.getElementsByClassName('tile').length; i++){
    contents.push(document.getElementsByClassName('tile')[i].outerHTML)
}
if(contents.length <=12){
    
}else{
    document.getElementById('slide1').innerHTML = '';
    for(i=0; i<12; i++){
        document.getElementById('slide1').innerHTML += contents[i]
    }
    for (i=12; i<contents.length; i++){
        if(i%12 == 0){
            document.getElementsByClassName('cat_content')[0].innerHTML += '<div class="cat_tiles" id="slide'+(parseInt(i/12)+parseInt(1))+'"></div>'
        }
        var slide = ((i-i%12)/12)+1
        document.getElementById('slide'+slide).innerHTML += contents[i]

    }
}
if(document.getElementsByClassName('cat_tiles').length>1){
    document.getElementsByClassName('cat_content')[0].innerHTML += '<div id="change_page"></div>'
    for(i=1; i<=document.getElementsByClassName('cat_tiles').length;i++){
        document.getElementById('change_page').innerHTML+='<button class="change_button" id="slide_button'+i+'" onclick="changeToSlide('+i+')">'+i+'</button>'
    }
}
function changeToSlide(slideNum){
    for (i=0; i<document.getElementsByClassName('cat_tiles').length; i++){
        document.getElementsByClassName('cat_tiles')[i].style.display='none';
        document.getElementsByClassName('change_button')[i].style.color='white';
    }
    document.getElementById('slide'+slideNum).style.display='grid';
    document.getElementById('slide_button'+slideNum).style.color='#FF6416';
}