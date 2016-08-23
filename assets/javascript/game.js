//Variables
//========================================================================
//variable for the chosen word
var hiddenWord = [];
//variable for blanks
var blankWord = [];
//variable for correct guesses
var goodGuess = [];
//variable for letters not in the word
var badGuess = [];
//Array of pokemon
var PokemonList = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle",'wartortle','blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran','nidorina','nidoqueen','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite','magneton','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb','electrode','exeggcute','exeggutor','cubone','marowak','hitmonlee','hitmonchan','lickitung','koffing','weezing','rhyhorn','rhydon','chansey','tangela','kangaskhan','horsea','seadra','goldeen','seaking','staryu','starmie','scyther','jynx','electabuzz','magmar','pinsir','tauros','magikarp','gyarados','lapras','ditto','eevee','vaporeon','jolteon','flareon','porygon','omanyte','omastar','kabuto','kabutops','aerodactyl','snorlax','articuno','zapdos','moltres','dratini','dragonair','dragonite','mewtwo','mew'];

var userGuess = "e"
//========================================================================

//Functions
//========================================================================

//Picks a random pokemon and puts it into the hiddenWord array
function IchooseYou() {
//=-=-=-=-=-=-=-=-=-=-
//Grabs a pokemon from the list and puts it in variable pokemonGrabber
var pokemonGrabber = PokemonList[Math.floor(Math.random()*PokemonList.length)];
	//pushes the chosen pokemon into the hiddenWord array and same number of blanks into blankWord
	//---------------------------------------------------
	for (var i = 0; i<pokemonGrabber.length; i++) {
		hiddenWord.push(pokemonGrabber.charAt(i));
		blankWord.push('_ ');
	}//forloop end
	//---------------------------------------------------

 }//function IchooseYou end
//=-=-=-=-=-=-=-=-=-=-
function checkGuess() {
	//Checks the userPress against each item in the hiddenWord array and replaces the correct guesses into blankWord.
	for (var k = 0; k<hiddenWord.length; k++) {
		if (userGuess == hiddenWord[k] && userGuess != goodGuess && userGuess != badGuess) {
			blankWord[k] = hiddenWord[k];
				
		}
		else {
		goodGuess.push(userGuess);
		badGuess.push(userGuess);
		}

}
}
//========================================================================

//Main Program

IchooseYou();
checkGuess();
console.log(hiddenWord);
console.log(blankWord);
console.log(goodGuess);
console.log(badGuess);
//========================================================================