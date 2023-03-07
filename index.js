/*
 *Create a deck using this!
 * let cards = ['A', 'K', 'Q', 'J', 'T', 9, 8, 7, 6, 5, 4, 3, 2]; 
 * A means 1 , T means 10 , J means 11, Q means 12 ,K means 13  
 * let suits = ['C', 'D', 'H', 'S'];
 * C means Clubs , D means Diamonds ,H means Hearts,S means Spades
 * 
 * output:
 * let res=['AS','KS,'QS'....'2S',
 *          'AC','KC,'QC'....'2C',
 *          'AD','KD,'QD'....'2D',
 *          'AH','KH,'QH'....'2H'
 *      ]
 */

let cards = ['A', 'K', 'Q', 'J', 'T', 9, 8, 7, 6, 5, 4, 3, 2];
let suits = ['C', 'D', 'H', 'S'];
let suitsName = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
let deck = {};

// suits.forEach((suit) => {
//     cards.forEach((card) => {
//         deck.push(card + suit);
//     });
// });

suits.forEach((suit, index) => {
    deck[suitsName[index]] = cards.map((card) => card + suit);
});

console.log('deck array ===>', deck);