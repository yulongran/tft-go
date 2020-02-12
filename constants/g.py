import os


def generate():
    for f in os.listdir('/Users/yulongran/react-native/TFT-ASSISTANT/TFTAssistant/assets/set2/new_item_icons'):
        name = f.split('.')
        print(f'{name[0]}: require("TFTAssistant/assets/set2/new_item_icons/{name[0]}.png"),')




generate()