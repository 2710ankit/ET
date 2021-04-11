

function searchFun(){
var startDate= document.getElementById('startDate').value;
var endDate= document.getElementById('endDate').value;
var countryName1= document.getElementById('countryName').value;
var mainDiv= document.getElementById('mainDiv');
var countryName = countryName1.replace(/\s/g, '-');
console.log(countryName);

if(startDate == "" || endDate == "" || countryName == ""){
    alert('All feilds are mandatory');
}

else{
    var xhr=new XMLHttpRequest();
    xhr.open('get',"https://api.covid19api.com/country/"+countryName+"?from="+startDate+"T00:00:00Z&to="+endDate+"T00:00:00Z")
    xhr.onreadystatechange = function(){
        if(this.readyState== 4 && this.status==200){
            while (mainDiv.firstChild) {
                mainDiv.removeChild(mainDiv.firstChild);
            }
            var data=JSON.parse(xhr.responseText);
            console.log(data.length);
            console.log(data);
            for(var i=0;i<data.length;i++){
            var div= document.createElement('div');
            div.setAttribute('class','infoDiv');
        
            var confirmedCase= document.createElement('p');
            var activeCase= document.createElement('p');
            var deathCase= document.createElement('p');
             confirmedCase.innerHTML="Confirmed Cases : "+data[i].Confirmed;
             activeCase.innerHTML="Active Cases : "+data[i].Active;
             deathCase.innerHTML="Death Cases : "+data[i].Deaths;
             div.appendChild(confirmedCase);
             div.appendChild(activeCase);
             div.appendChild(deathCase);
             mainDiv.appendChild(div);
        
            }
        }
    }
    xhr.send();
    


}
}