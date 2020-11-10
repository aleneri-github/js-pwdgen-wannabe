var name = prompt("Inserisci il tuo nome:");
var surname = prompt("Inserisci il tuo cognome:");
var favoriteColor = prompt("Indica il tuo colore preferito:");

document.getElementById("name").innerHTML = name;
document.getElementById("surname").innerHTML = surname;
document.getElementById("favorite_color").innerHTML = favoriteColor;

var password = name + surname + favoriteColor;

document.getElementById("password").innerHTML = password;
