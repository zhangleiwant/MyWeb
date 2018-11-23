window.onload=function(){
    var oBtn1=document.getElementById('btn-h2');
    var oShade=document.getElementById('shade');
    var oBtnRed=document.getElementById('item-red');
    var oBtnYel=document.getElementById('item-yellow');
    var oBtnBlu=document.getElementById('item-blue');
    var oWidth1=document.getElementById('width200');
    var oWidth2=document.getElementById('width300');
    var oWidth3=document.getElementById('width400');
    var oHeight1=document.getElementById('height200');
    var oHeight2=document.getElementById('height300');
    var oHeight3=document.getElementById('height400');
    var oSetBox=document.getElementById('set-box');
    var oBtn2=document.getElementById('reset');
    var oBtn3=document.getElementById('submit');

    oBtn1.onclick=function(){
        oShade.style.display="block";    
    }
    oBtnRed.onclick=function(){
        oSetBox.style.background="red";
    }
    oBtnYel.onclick=function(){
        oSetBox.style.background="yellow";
    }
    oBtnBlu.onclick=function(){
        oSetBox.style.background="blue";
    }
    oWidth1.onclick=function(){
        oSetBox.style.width=200+"px";    
    }
    oWidth2.onclick=function(){
        oSetBox.style.width=300+"px";    
    }
    oWidth3.onclick=function(){
        oSetBox.style.width=400+"px";    
    }
    oHeight1.onclick=function(){
        oSetBox.style.height=200+"px";    
    }
    oHeight2.onclick=function(){
        oSetBox.style.height=300+"px";    
    }
    oHeight3.onclick=function(){
        oSetBox.style.height=400+"px";    
    }
    oBtn2.onclick=function(){
        oSetBox.style.width=100+"px";
        oSetBox.style.height=100+"px";
        oSetBox.style.background="";
        oShade.style.display="none";    
    }
    oBtn3.onclick=function(){
        oShade.style.display="none";    
    }
}