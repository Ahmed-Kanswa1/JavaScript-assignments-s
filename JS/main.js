
var newQoute;
var doc=document.getElementById('qoute')
var exNumber=99;
var qoute0='“Be yourself; everyone else is already taken”. <br></br> ― Oscar Wilde';

var qoute1='“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”. <br></br> ― Albert Einstein';
var qoute2='“So many books, so little time.” <br></br> ― Frank Zappa';
var qoute3='“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.” <br></br> ― Bernard M. Baruch';

function random(){
    
     newQoute= Math.floor(Math.random()*4)
     while(exNumber==newQoute){
        newQoute= Math.floor(Math.random()*4)
     }
     exNumber=newQoute;
     return exNumber;

}



function clickIt(){
   
    
     random();
     switch(exNumber){
        case 0:
            doc.innerHTML=qoute0;
            break;
        case 1:
            doc.innerHTML=qoute1;
            break;
            case 2:

            doc.innerHTML=qoute2;
            break;
            default: 3
                doc.innerHTML=qoute3
     }
    

     console.log(newQoute)


    
}




