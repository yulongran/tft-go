const TRAIT = {
    "Alchemist": require("tftgo/assets/trait_icons/alchemist.png"),
    "Assassin": require("tftgo/assets/trait_icons/assassin.png"),
    "Avatar": require("tftgo/assets/trait_icons/avatar.png"),
    "Beserker": require("tftgo/assets/trait_icons/berserker.png"),
    "Blademaster": require("tftgo/assets/trait_icons/blademaster.png"),
    "Cloud": require("tftgo/assets/trait_icons/cloud.png"),
    "Crystal": require("tftgo/assets/trait_icons/crystal.png"),
    "Desert": require("tftgo/assets/trait_icons/desert.png"),
    "Druid": require("tftgo/assets/trait_icons/druid.png"),
    "Eletric": require("tftgo/assets/trait_icons/electric.png"),
    "Glacial": require("tftgo/assets/trait_icons/glacial.png"),
    "Inferno": require("tftgo/assets/trait_icons/inferno.png"),
    "Light": require("tftgo/assets/trait_icons/light.png"),
    "Mage": require("tftgo/assets/trait_icons/mage.png"),
    "Mountain": require("tftgo/assets/trait_icons/mountain.png"),
    "Mystic": require("tftgo/assets/trait_icons/mystic.png"),
    "Ocean": require("tftgo/assets/trait_icons/ocean.png"),
    "Poison": require("tftgo/assets/trait_icons/poison.png"),
    "Predator": require("tftgo/assets/trait_icons/predator.png"),
    "Ranger": require("tftgo/assets/trait_icons/ranger.png"),
    "Shadow": require("tftgo/assets/trait_icons/shadow.png"),
    "Steel": require("tftgo/assets/trait_icons/steel.png"),
    "Summoner": require("tftgo/assets/trait_icons/summoner.png"),
    "Warden": require("tftgo/assets/trait_icons/warden.png"),
    "Woodland": require("tftgo/assets/trait_icons/woodland.png"),
    
}


export const getTrait = (name) => { // dynamically invoked
    return TRAIT[name]
}
