$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
}
//1
async function draw1() {
    let data = await $.getJSON(`${baseURL}/new/draw`);
    let { suit, value } = data.cards[0];
    console.log(`value.toLowerCase()`})
)