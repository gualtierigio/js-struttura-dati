
let card = {
    name : "Tarmogoyf",
    manaCost : {
        common : 1,
        forest : 1,
        plains : 0,
        island : 0,
        swamp : 0,
        mountain : 0,
    },

    combinedManaCost :

    function(){
        let sum = 0;
        for (let type in this.manaCost){
            sum += this.manaCost[type];
        }
        return sum;
    },

    tipeOfCard : "creature", 
    tipeOfCreature : "lhurgoyf",

    edition : {
        rarity : "ultra-rare",
        yearEdition : "2017",
        existentCards : 249,
    },

    flavourText : {
        author : "Rean Barger",
        descriptiopn : "What doesn't grow, dies. And what dies grows the tarmogoyf."
    },

    abilities : [
        {manaCostAbilities : {
            common : 0,
            forest : 0,
            plains : 0,
            island : 0,
            swamp : 0,
            mountain : 0,
        },
        description : "Tarmogoyf's power is equal to the number of card types among cards in all graveyards and its toughness is equal to that number plus 1.",
        tap : false,
    }],

    cardOfTheExistentCards : 141,

    costitution : 1,
    strength : 0,

    borderCard : "black",

    cardImg : "img/tarmogoyf.png"
}

console.log(card);

let cardDisplayHTML = 
`<ul class="card-element">

    <li>Name: ${card.name}</li>
    <li>Total mana cost: ${card.combinedManaCost()}</li>
        <ul class"mana-cost">
            <li>Common mana cost: ${card.manaCost.common}</li>
            <li>Forest mana cost: ${card.manaCost.forest}</li>
            <li>Plains mana cost: ${card.manaCost.plains}</li>
            <li>Swamp mana cost: ${card.manaCost.swamp}</li>
            <li>Mountain mana cost: ${card.manaCost.mountain}</li>
            <li>Island mana cost: ${card.manaCost.island}</li>
        </ul>
    <li>Card type: ${card.tipeOfCard} ${card.tipeOfCreature}</li>
    <li>Edition: 
        <ul class"expansion">
            <li>Rarity: ${card.edition.rarity}</li>
            <li>Year edition: ${card.edition.yearEdition}</li>
            <li>Existent cards: ${card.edition.existentCards}</li>
        </ul>
    <li>Collection number: ${card.cardOfTheExistentCards}/${card.edition.existentCards}</li>
    <li>Effects: ${card.flavourText.descriptiopn} - <em>${card.flavourText.author}</em></li>
    <li>Strength and Costitution: ${card.strength}/${card.costitution}</li>
    <li>Border color: ${card.borderCard}</li>
    <img src="${card.cardImg}" alt="whole card img">

</ul>`

document.getElementById('grimorio').innerHTML += cardDisplayHTML