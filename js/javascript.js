alert("Benvenuti Andrea o Adriano, buon pomeriggio!")

var name = prompt("Inserisci il tuo nome:");
var surname = prompt("Inserisci il tuo cognome:");
var favoriteColor = prompt("Indica il tuo colore preferito:");
var number19 = "19";

document.getElementById("name").innerHTML = name;
document.getElementById("surname").innerHTML = surname;
document.getElementById("favorite_color").innerHTML = favoriteColor;

var password = name + surname + favoriteColor + number19;

document.getElementById("password").innerHTML = password;
