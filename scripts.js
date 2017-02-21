var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.",
    textSlonie = "Zielone słonie",
    textSlonieUpper = textSlonie.toUpperCase(),
    textNew = text.replace("Papugi", textSlonieUpper);

console.log(textNew.substr(0, (textNew.length / 2)));




/*
var femaleNames = ["Kamil", "Robert", "Andrzej", "Olek"],
    maleNames = ["Gosia", "Anna", "Alina", "Ola"];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = "Marian";

if (allNames.indexOf(newName) === -1) {//ok czaje co oznacza -1 teraz :)
    allNames.push(newName);
    console.log("dodano imię " + newName + " do tablicy, ktora aktualnie wygląda tak: " + allNames);
} else {
    console.log("Imię znajduje się już w tablicy");
}
*/