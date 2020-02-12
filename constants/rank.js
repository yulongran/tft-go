const RANKICON = {
    CHALLENGER: require("TFTAssistant/assets/ranked-emblems/Emblem_Challenger.png"),
    GRANDMASTER: require('TFTAssistant/assets/ranked-emblems/Emblem_Grandmaster.png'),
    MASTER: require('TFTAssistant/assets/ranked-emblems/Emblem_Master.png'),
    DIAMOND: require('TFTAssistant/assets/ranked-emblems/Emblem_Diamond.png'),
    PLATINUM: require('TFTAssistant/assets/ranked-emblems/Emblem_Platinum.png'),
    GOLD: require('TFTAssistant/assets/ranked-emblems/Emblem_Gold.png'),
    SILVER: require('TFTAssistant/assets/ranked-emblems/Emblem_Silver.png'),
    BRONZE: require('TFTAssistant/assets/ranked-emblems/Emblem_Bronze.png'),
    IRON: require('TFTAssistant/assets/ranked-emblems/Emblem_Iron.png'),
    UNRANKED: require('TFTAssistant/assets/ranked-emblems/Emblem_Unrank.png'),

}


export const getRankIcon = (name) => { // dynamically invoked
    return RANKICON[name];
}
