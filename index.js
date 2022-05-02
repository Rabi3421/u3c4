// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from'./components/navbar.js'
document.body.innerHTML=navbar();


const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
const result = document.getElementById("results")
fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res.articles)
        appenddata(res.articles)
    })
    .catch(function(err){
        console.log(err)
    })
function appenddata(data){
  data.forEach(function(el){
    let div=document.createElement("div")
      let div1=document.createElement("div")
      let div2=document.createElement("div")
      let img=document.createElement("img");
      let title=document.createElement("p")
      let description=document.createElement("p");
      
      img.src=el.urlToImage;
      title.innerText=el.title;
      description.innerText=el.description;
      div1.append(img)
      div2.append(title,description)
      div.append(div1,div2)
      result.append(div)
      div.addEventListener("click",function(){
          news(el);
      })
  })
}
function news(el){
    localStorage.setItem("news",JSON.stringify(el));
    window.location.href="news.html";
}
