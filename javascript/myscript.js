
let card = {
    name : "Tarmogoyf",
    manaCost = {
        common : 1,
        forest : 1,
        plains : 0,
        island : 0,
        swamp : 0,
        mountain : 0,
    },

    function(){
        let sum = 0;
        for (let type in this.manaCost){
            sum += this.manaCost[type];
        }
        return sum;
    },

    tipeOfCard : "creature", 
    tipeOfCreature : "lhurgoyf",

    edition = {
        rarity : "ultra-rare",
        yearEdition : "2017",
        existentCards : 249,
    },

    flavourText : {
        author : "Rean Barger",
        descriptiopn : "What doesn't grow, dies. And what dies grows the tarmogoyf."
    },

    abilities : [
        {manaCostAbilities = {
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

    cardImg : "..img/tarmogoyf.png"
}