class Movie{
    constructor(title, director, year){
        this.title=title
        this.director=director
        this.year=year
    }
}
    const defaultmovies=[
        {
            title:"Jurrasic Park", 
          director:"John Doe",
          year:"1990",
        },
        {
            title:"Jumanji", 
          director:"Jake Kasden",
          year:"1995",
        },
        {
            title:"The meg", 
          director:"Jon Turteltaub",
          year:"2018",
         }   
 ]
  
 class Ui{
    static addmovietolist=(movie) =>{ 
     const list=document.getElementById('movielist')
     const row=document.createElement('tr')
     row.innerHTML=`<td>${movie.title}</td><td>${movie.director}</td><td>${movie.year}</td>`
     list.appendChild(row) 
    }
    static displaymovies=()=>{
        defaultmovies.forEach(movie=>Ui.addmovietolist(movie))
    }
 }
 Ui.displaymovies()

document.querySelector('#movie-form').addEventListener("submit",addmovie)

function addmovie(e){
    e.preventDefault()
    const title=document.querySelector("#title").value
    const director=document.querySelector("#director").value
    const year=document.querySelector("#year").value
    const movie=new Movie(title,director,year)
    Ui.addmovietolist(movie)
}