//Import data from the pokedex.json file to be used.
import data from './pokedex.json' assert { type: 'json' };

//Create various consts that will be used to print out content to the specified Id.
const total = document.getElementById("total");
const output = document.getElementById("output");
const candies = document.getElementById("candies");
const average_spawns = document.getElementById("average_spawns");
const chance = document.getElementById("chance");

//Declare varaibles that get used in the for loops
let info = "";
let spawn_avg = 0; //Spawn average
let candy_count = 0; //Candy count
let spawn_chn = 0; //Spawn chance

//For loop that runs for however many pokemon are in the json file.
for (let i = 0; i < data.pokemon.length; i++) {
    /*Prints out the following in order:
    Name, Number, Type, Image, Height, Weight. Each is in their own paragrapgh section.
    Titles are bolded while the actual data pulled from the json file are not.*/
    info += `<div id="pokemon"><p><b>Name:</b> ${data.pokemon[i].name}</p>
                      <p><b>Number:</b> ${data.pokemon[i].num}</p>
                      <p><b>Type:</b> ${data.pokemon[i].type}</p>
                      <p><img src="${data.pokemon[i].img}"></p>
                      <p><b>Height:</b> ${data.pokemon[i].height}</p>
                      <p><b>Weight:</b> ${data.pokemon[i].weight}</p>
                      </div>`;
}

//For loop that runs for however many pokemon are in the json file
for (let i = 0; i < data.pokemon.length; i++) {
  //Add to the candy_count let if the pokemon has a candy_count value from the json file.
  //Skip it if it is undefined.
  if (data.pokemon[i].candy_count != undefined) {
    let candy_calc = data.pokemon[i].candy_count;
    candy_count += candy_calc;
  }
}

//For loop that runs for however many pokemon are in the json file
for (let i = 0; i < data.pokemon.length; i++) {
  //Add to the spawn_avg let from the avg_spawns value from the json file.
  let spawn_avg_calc = data.pokemon[i].avg_spawns;
  spawn_avg += spawn_avg_calc;
}

//For loop that runs for however many pokemon are in the json file
for (let i = 0; i < data.pokemon.length; i++) {
  //Add to the spawn_chn let from the avg_spawns value from the json file.
  let spawn_chn_calc = data.pokemon[i].spawn_chance;
  spawn_chn += spawn_chn_calc;
}

//Shorten to 2 decimal places as it was outputting a large number with over 10 deciaml places.
let spawn_dec = (spawn_avg/data.pokemon.length).toFixed(2);
let candy_avg = (candy_count/data.pokemon.length).toFixed(2);
let chance_avg = (spawn_chn/data.pokemon.length).toFixed(2);

//Lists the amount of Pokemon in the json file.
//Also displays what the first[0] and last [.length-1] Pokemon are. It will always
//display the last one in the list so it can be updated and still work.
total.innerHTML = (`<p>The total amount of Pokemon included in this list is <b>${data.pokemon.length}</b>.</p>
<p>This includes all of the Generation 1 Pokemon ranging from <b>${data.pokemon[0].name}</b> to <b>${data.pokemon[data.pokemon.length-1].name}</b>.</p>`);

//List the info of the Pokemon.
//Name, Number, Type, Image, Height, Weight
output.innerHTML = info;

//Display the amount of pokemon and what the average is across all of them.
average_spawns.innerHTML = (`The average for the 'avg_spawns' value across all <b>${data.pokemon.length}</b> Pokemon is <b>${spawn_dec}</b>.`);
candies.innerHTML = (`The average for the 'candy_count' value across all <b>${data.pokemon.length}</b> Pokemon is <b>${candy_avg}</b>.`);
chance.innerHTML = (`The average for the 'spawn_average' value across all <b>${data.pokemon.length}</b> Pokemon is <b>${chance_avg}</b>.`);
