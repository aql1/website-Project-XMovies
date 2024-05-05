const API = "http://www.omdbapi.com/?apikey=746a0c40";

async function loadMovies(){
    
    // -------------------------Trending Movies-------------------------
    var response = await fetch(API + `&t=`+`killers of the flower moon`);
    var data = await response.json();
    document.getElementById("movieOne").src= data.Poster;
    document.getElementById("movieOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`the hunger games: the ballad of songbirds & snakes`);
    var data = await response.json();
    document.getElementById("movieTwo").src= data.Poster;
    document.getElementById("movieTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Napoleon`);
    var data = await response.json();
    document.getElementById("movieThree").src= data.Poster;
    document.getElementById("movieThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Oppenheimer`);
    var data = await response.json();
    document.getElementById("movieFour").src= data.Poster;
    document.getElementById("movieFour").alt= data.title;
    // -------------------------Action Movies----------------------------
    var response = await fetch(API + `&t=`+`Scarface`);
    var data = await response.json();
    document.getElementById("actionOne").src= data.Poster;
    document.getElementById("actionOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Rush`);
    var data = await response.json();
    document.getElementById("actionTwo").src= data.Poster;
    document.getElementById("actionTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Skyfall`);
    var data = await response.json();
    document.getElementById("actionThree").src= data.Poster;
    document.getElementById("actionThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Man from U.N.C.L.E.`);
    var data = await response.json();
    document.getElementById("actionFour").src= data.Poster;
    document.getElementById("actionFour").alt= data.title;
    // -------------------------Comedy Movies----------------------------
    var response = await fetch(API + `&t=`+`Deadpool 2`);
    var data = await response.json();
    document.getElementById("comedyOne").src= data.Poster;
    document.getElementById("comedyOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Nice Guys`);
    var data = await response.json();
    document.getElementById("comedyTwo").src= data.Poster;
    document.getElementById("comedyTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Midnight Run`);
    var data = await response.json();
    document.getElementById("comedyThree").src= data.Poster;
    document.getElementById("comedyThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Gentlemen`);
    var data = await response.json();
    document.getElementById("comedyFour").src= data.Poster;
    document.getElementById("comedyFour").alt= data.title;
    // -------------------------Sci-Fi Movies----------------------------
    var response = await fetch(API + `&t=`+`Dune`);
    var data = await response.json();
    document.getElementById("scifiOne").src= data.Poster;
    document.getElementById("scifiOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`X-Men: Days of Future Past`);
    var data = await response.json();
    document.getElementById("scifiTwo").src= data.Poster;
    document.getElementById("scifiTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Blade Runner 2049`);
    var data = await response.json();
    document.getElementById("scifiThree").src= data.Poster;
    document.getElementById("scifiThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Interstellar`);
    var data = await response.json();
    document.getElementById("scifiFour").src= data.Poster;
    document.getElementById("scifiFour").alt= data.title;
    // -------------------------Romance Movies----------------------------
    var response = await fetch(API + `&t=`+`Barry Lyndon`);
    var data = await response.json();
    document.getElementById("romanceOne").src= data.Poster;
    document.getElementById("romanceOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`CODA`);
    var data = await response.json();
    document.getElementById("romanceTwo").src= data.Poster;
    document.getElementById("romanceTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`A Star Is Born`);
    var data = await response.json();
    document.getElementById("romanceThree").src= data.Poster;
    document.getElementById("romanceThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`La la land`);
    var data = await response.json();
    document.getElementById("romanceFour").src= data.Poster;
    document.getElementById("romanceFour").alt= data.title;
    // -------------------------Fantasy Movies----------------------------
    var response = await fetch(API + `&t=`+`Harry Potter and the Deathly Hallows: Part 2`);
    var data = await response.json();
    document.getElementById("fantasyOne").src= data.Poster;
    document.getElementById("fantasyOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Donnie Darko`);
    var data = await response.json();
    document.getElementById("fantasyTwo").src= data.Poster;
    document.getElementById("fantasyTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Lord of the Rings: The Return of the King`);
    var data = await response.json();
    document.getElementById("fantasyThree").src= data.Poster;
    document.getElementById("fantasyThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Dungeons & Dragons: Honor Among Thieves`);
    var data = await response.json();
    document.getElementById("fantasyFour").src= data.Poster;
    document.getElementById("fantasyFour").alt= data.title;
    // -------------------------Horror Movies----------------------------
    var response = await fetch(API + `&t=`+`Midsommar`);
    var data = await response.json();
    document.getElementById("horrorOne").src= data.Poster;
    document.getElementById("horrorOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Malignant`);
    var data = await response.json();
    document.getElementById("horrorTwo").src= data.Poster;
    document.getElementById("horrorTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Shining`);
    var data = await response.json();
    document.getElementById("horrorThree").src= data.Poster;
    document.getElementById("horrorThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Annihilation`);
    var data = await response.json();
    document.getElementById("horrorFour").src= data.Poster;
    document.getElementById("horrorFour").alt= data.title;
    // -------------------------Animation Movies----------------------------
    var response = await fetch(API + `&t=`+`Spider-Man: Into the Spider-Verse`);
    var data = await response.json();
    document.getElementById("aniOne").src= data.Poster;
    document.getElementById("aniOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Toy Story 3`);
    var data = await response.json();
    document.getElementById("aniTwo").src= data.Poster;
    document.getElementById("aniTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Soul`);
    var data = await response.json();
    document.getElementById("aniThree").src= data.Poster;
    document.getElementById("aniThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Up`);
    var data = await response.json();
    document.getElementById("aniFour").src= data.Poster;
    document.getElementById("aniFour").alt= data.title;
}

async function loadShows(){
    // ------------------------Trending Shows-----------------------------
    var response = await fetch(API + `&t=`+`True Detective`);
    var data = await response.json();
    document.getElementById("showOne").src= data.Poster;
    document.getElementById("showOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Reacher`);
    var data = await response.json();
    document.getElementById("showTwo").src= data.Poster;
    document.getElementById("showTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Fargo`);
    var data = await response.json();
    document.getElementById("showThree").src= data.Poster;
    document.getElementById("showThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Masters of the Air`);
    var data = await response.json();
    document.getElementById("showFour").src= data.Poster;
    document.getElementById("showFour").alt= data.title;
    // ------------------------Drama Shows-----------------------------
    var response = await fetch(API + `&t=`+`the leftovers`);
    var data = await response.json();
    document.getElementById("dramaOne").src= data.Poster;
    document.getElementById("dramaOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Sons of Anarchy`);
    var data = await response.json();
    document.getElementById("dramaTwo").src= data.Poster;
    document.getElementById("dramaTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Sopranos`);
    var data = await response.json();
    document.getElementById("dramaThree").src= data.Poster;
    document.getElementById("dramaThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Boardwalk Empire`);
    var data = await response.json();
    document.getElementById("dramaFour").src= data.Poster;
    document.getElementById("dramaFour").alt= data.title;
    // ------------------------Crime Shows-----------------------------
    var response = await fetch(API + `&t=`+`Sharp Objects`);
    var data = await response.json();
    document.getElementById("crimeOne").src= data.Poster;
    document.getElementById("crimeOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Mindhunter`);
    var data = await response.json();
    document.getElementById("crimeTwo").src= data.Poster;
    document.getElementById("crimeTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Punisher`);
    var data = await response.json();
    document.getElementById("crimeThree").src= data.Poster;
    document.getElementById("crimeThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Defending Jacob`);
    var data = await response.json();
    document.getElementById("crimeFour").src= data.Poster;
    document.getElementById("crimeFour").alt= data.title;
    // ------------------------Comedy Shows-----------------------------
    var response = await fetch(API + `&t=`+`Friends`);
    var data = await response.json();
    document.getElementById("comedyOne").src= data.Poster;
    document.getElementById("comedyOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Office`);
    var data = await response.json();
    document.getElementById("comedyTwo").src= data.Poster;
    document.getElementById("comedyTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Modern Family`);
    var data = await response.json();
    document.getElementById("comedyThree").src= data.Poster;
    document.getElementById("comedyThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Maniac`);
    var data = await response.json();
    document.getElementById("comedyFour").src= data.Poster;
    document.getElementById("comedyFour").alt= data.title;
    // ------------------------Fantasy Shows-----------------------------
    var response = await fetch(API + `&t=`+`The Witcher`);
    var data = await response.json();
    document.getElementById("fantasyOne").src= data.Poster;
    document.getElementById("fantasyOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Game of thrones`);
    var data = await response.json();
    document.getElementById("fantasyTwo").src= data.Poster;
    document.getElementById("fantasyTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`House of the dragon`);
    var data = await response.json();
    document.getElementById("fantasyThree").src= data.Poster;
    document.getElementById("fantasyThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Shadow and bone`);
    var data = await response.json();
    document.getElementById("fantasyFour").src= data.Poster;
    document.getElementById("fantasyFour").alt= data.title;
    // -------------------------Horror Shows----------------------------
    var response = await fetch(API + `&t=`+`Midnight Mass`);
    var data = await response.json();
    document.getElementById("horrorOne").src= data.Poster;
    document.getElementById("horrorOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Haunting of Hill House`);
    var data = await response.json();
    document.getElementById("horrorTwo").src= data.Poster;
    document.getElementById("horrorTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Ratched`);
    var data = await response.json();
    document.getElementById("horrorThree").src= data.Poster;
    document.getElementById("horrorThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Mist`);
    var data = await response.json();
    document.getElementById("horrorFour").src= data.Poster;
    document.getElementById("horrorFour").alt= data.title;
    // -------------------------True Story Shows----------------------------
    var response = await fetch(API + `&t=`+`When They See Us`);
    var data = await response.json();
    document.getElementById("trueOne").src= data.Poster;
    document.getElementById("trueOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Narcos`);
    var data = await response.json();
    document.getElementById("trueTwo").src= data.Poster;
    document.getElementById("trueTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Chernobyl`);
    var data = await response.json();
    document.getElementById("trueThree").src= data.Poster;
    document.getElementById("trueThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`The Crown`);
    var data = await response.json();
    document.getElementById("trueFour").src= data.Poster;
    document.getElementById("trueFour").alt= data.title;
    // -------------------------Animation Movies----------------------------
    var response = await fetch(API + `&t=`+`Invincible`);
    var data = await response.json();
    document.getElementById("aniOne").src= data.Poster;
    document.getElementById("aniOne").alt= data.title;
  
    var response = await fetch(API + `&t=`+`What If...?`);
    var data = await response.json();
    document.getElementById("aniTwo").src= data.Poster;
    document.getElementById("aniTwo").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Arcane`);
    var data = await response.json();
    document.getElementById("aniThree").src= data.Poster;
    document.getElementById("aniThree").alt= data.title;
  
    var response = await fetch(API + `&t=`+`Ahsoka`);
    var data = await response.json();
    document.getElementById("aniFour").src= data.Poster;
    document.getElementById("aniFour").alt= data.title;

}

  
  