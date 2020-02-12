const RANKICON = {
    CHALLENGER: require("tftgo/assets/ranked-emblems/Emblem_Challenger.png"),
    GRANDMASTER: require('tftgo/assets/ranked-emblems/Emblem_Grandmaster.png'),
    MASTER: require('tftgo/assets/ranked-emblems/Emblem_Master.png'),
    DIAMOND: require('tftgo/assets/ranked-emblems/Emblem_Diamond.png'),
    PLATINUM: require('tftgo/assets/ranked-emblems/Emblem_Platinum.png'),
    GOLD: require('tftgo/assets/ranked-emblems/Emblem_Gold.png'),
    SILVER: require('tftgo/assets/ranked-emblems/Emblem_Silver.png'),
    BRONZE: require('tftgo/assets/ranked-emblems/Emblem_Bronze.png'),
    IRON: require('tftgo/assets/ranked-emblems/Emblem_Iron.png'),
    UNRANKED: require('tftgo/assets/ranked-emblems/Emblem_Unrank.png'),

}


export const getRankIcon = (name) => { // dynamically invoked
    return RANKICON[name];
}
