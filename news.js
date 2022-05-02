// Ude Import export (MANDATORY)
import navbar from'./components/navbar.js'
document.body.innerHTML=navbar();


const result = document.getElementById("results")
let news = JSON.parse(localStorage.getItem("news"));
news.forEach(function(elem){
        let div=document.createElement("div")
      let div1=document.createElement("div")
      let div2=document.createElement("div")
      let img=document.createElement("img");
      let title=document.createElement("p")
      let description=document.createElement("p");
      
      img.src=elem.urlToImage;
      title.innerText=elem.title;
      description.innerText=elem.description;
      div1.append(img)
      div2.append(title,description)
      div.append(div1,div2)
      result.append(div)
})