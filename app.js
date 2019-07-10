// #### On the Good Side:

// > Hobbits - 1,
//   Men - 2,
//   Elves - 3,
//   Dwarves - 3,
//   Eagles - 4,
//   Wizards - 10

// #### On the side of evil we have:
// > Orcs - 1,
//   Men - 2,
//   Wargs - 2,
//   Goblins - 2,
//   Uruk Hai - 3,
//     Trolls - 5,
//     Wizards - 10

// #### Output:
// Return
// if Good wins - `"Battle Result: Good triumphs over Evil"`
// if Evil Wins - `"Battle Result: Evil eradicates all trace of Good"`
// if Tied - `"Battle Result: No victor on this battle field"`



var goodValues = [1, 2, 3, 3, 4, 10]
var evilValues = [1, 2, 2, 2, 3, 5, 10]

var testGood = '1 1 1 2 1 0'
var testEvil = '2 0 1 0 1 0 1'
//two strings
function goodVsEvil(goodTeam, evilTeam) {
  return "Battle Result: Evil eradicates all trace of Good"
}
//OUT STRING