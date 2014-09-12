/* 
 * Check the data.
 */

function confirmSubmit(){
  if(chkName() && chkState()&& chkPost() && chkCuisine()  && chkCost() && chkFood() && chkService() && chkAmbience() && chkValue()  && chkDate())
    {
         msg= "Data submited!";
        return confirm(msg);
    }
 else{                                                                          //output the errors and convert them to one message
        var error ="The following errors are found : ";
        var city= document.getElementById('city').value;
        if(!chkName())
        {
              error = error + "The resterrants name includes invalid signs. ";
        }
       if(!chkState()){
        error =error +"Please chose a state. ";
        }
        if(city == 0){
            error = error +"Please enter a city. ";
        }
         if(!chkPost()){
       error = error + "The post is not suit to the state you chosed. ";
        }
       if(!chkCuisine()){
       error = error+"Please chose a cuisine. ";
        }
        if(!chkCost()){
       error = error +"Please enter a cost between 1.0 to 100.0  ";
        }
       if(!chkFood()){
        error = error+ "Please enter a food rating between 0.0 to 10.0  ";
       }
       if(!chkService()){
        error=error+"Please enter a service rating between 0.0 to 10.0  ";
      }
      if(!chkAmbience()){
        error = error + "Please enter a ambience rating between 0.0 to 10.0  ";
      }
    if(!chkValue()){
        error = error + "Please enter a valuse reating between  0.0 to 10.0 ";
      }
    if(!chkDate()){
        error = error +"Date invalid. ";
     }
     alert(error);
     return false;
    }
    
}
function chkName(){                                                             //check name, <>& can not include in name.                                                            
    var name = document.getElementById('rName').value;                          //use loop to chack each number.
    var len=name.length;
 for(var i=0;i<len;i++){
    var ch=name.charAt(i);
    if(ch == '<' || ch == '>' || ch =='&'){
         return false;
    }
    return true;
 }
 
}
function chkState(){                                                            //check state if state is 0 means 
    var s = document.getElementById('state');
        return !s[0].selected;
      
}
 function chkPost(){
    var post=document.getElementById('postNum').value;
    var s = document.getElementById('state');
    if(s[1].selected && ((post>=2600 && post <=2699) || (post>=2900 && post<3000))){
       return true;
    } 
    else if(s[2].selected && post>=2000 && post <=2999){
        return true;
    }
    else if(s[3].selected && ((post>=800 && post<=899)|| (post>=900 && post<=999)))
   {
       return true;
   }
   else if(s[4].selected && post>=4000 &&post<=4999){
       return true;
   }
   else if(s[5].selected && post>=5000 && post<=5999){
       return true;
   }
   else if(s[6].selected && post >=7000 && post <=7999){
       return true;
   }
   else if(s[7].selected && post >=3000 && post <=3999){
       return true;
   }
   else if(s[8].selected && post >=6000 && post <=6999){
       return true;
   } 
  else return false;
}
function chkCuisine(){
    var cselector = document.getElementById('cuisine');
   return !cselector[0].selected;
}
function chkCost(){
    var cost=document.getElementById('cost').value;
    if(cost >=1.0 && cost <=100.0){
        return true;
    }
    else return false;
}
function chkFood(){
       var food=document.getElementById('foodRating').value;
    if(food >='0' && food <=10.0){
        return true;
    }
    else    return false;
    
}
function chkService(){
       var service=document.getElementById('serviceRating').value;
    if(service >='0' && service <=10.0){
        return true;
    }
    else    return false;
    
}
function chkAmbience(){
       var ambience=document.getElementById('amRating').value;
    if(ambience >='0' && ambience <=10.0){
        return true;
    }
    else    return false;
}
function chkValue(){
       var valueInput=document.getElementById('valueRating').value;
    if(valueInput >='0' && valueInput <=10.0){
        return true;
    }
   else     return false;
}
function chkDate(){
    var dateValue = document.getElementById('date').value;
    var reg = /^(\d{2})(-)(\d{2})(-)(\d{4})$/;
     var r= reg.exec(dateValue);
    var arrayo=dateValue.replace(/^0/,"");
    var array = arrayo.replace(/\-0/g, "-").split("-"); 
    var year=Number(array[2]);
    var month=Number(array[1])-1;
    var day=Number(array[0]);
   
    var d= new Date(year,month,day);
    
 if(r==null){
     return false;
     
 }
  else 
     if( d.getFullYear()!= year 
            || d.getDate()!=day 
            ||d.getMonth()!=month){
         return false;
     }
else return true;
  }
  



