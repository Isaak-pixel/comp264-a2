import data from './pokedex.json' assert { type: 'json' };

const total = document.getElementById("total");
const output = document.getElementById("output");
const candies = document.getElementById("candies");
const average_spawns = document.getElementById("average_spawns");

//Declare varaibles that get used in the for loops
let info = "";
let spawn_avg = 0;
let candy_count = 0;

for (let i = 0; i < data.pokemon.length; i++) {
    info += `<div id="pokemon"><p><b>Name:</b> ${data.pokemon[i].name}</p>
                      <p><b>Number:</b> ${data.pokemon[i].num}</p>
                      <p><b>Type:</b> ${data.pokemon[i].type}</p>
                      <p><img src="${data.pokemon[i].img}"></p>
                      </div>`;
}

for (let i = 0; i < data.pokemon.length; i++) {
  if (data.pokemon[i].candy_count != undefined) {
    let candy_calc = data.pokemon[i].candy_count;
    candy_count += candy_calc;
  }
}

for (let i = 0; i < data.pokemon.length; i++) {
  let spawn_avg_calc = data.pokemon[i].avg_spawns;
  spawn_avg += spawn_avg_calc;
}

//Shorten to 2 decimal places as it was outputting a large number with over 10 deciaml places.
let spawn_dec = (spawn_avg/data.pokemon.length).toFixed(2);
let candy_avg = (candy_count/data.pokemon.length).toFixed(2);

//Lists the amount of Pokemon in the json file.
//Also displays what the first[0] and last [.length-1] Pokemon are. It will always
//display the last one in the list so it can be updated and still work.
total.innerHTML = (`<p>The total amount of Pokemon included in this list is ${data.pokemon.length}.</p>
<p>This includes all of the Generation 1 Pokemon ranging from ${data.pokemon[0].name} to ${data.pokemon[data.pokemon.length-1].name}.</p>`);

//List the info of the Pokemon.
output.innerHTML = info;

//Display the amount of pokemon and what the average is across all of them.
average_spawns.innerHTML = (`The average for the 'avg_spawns' value across all ${data.pokemon.length} Pokemon is ${spawn_dec}.`);
candies.innerHTML = (`The average for the 'candy_count' value across all ${data.pokemon.length} Pokemon is ${candy_avg}.`);
