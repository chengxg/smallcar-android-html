cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cxg-plugin-bluetoothSerial.bluetoothSerial",
    "file": "plugins/cxg-plugin-bluetoothSerial/www/bluetoothSerial.js",
    "pluginId": "cxg-plugin-bluetoothSerial",
    "clobbers": [
      "cxg.bluetoothSerial"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cxg-plugin-bluetoothSerial": "0.1.0"
};
// BOTTOM OF METADATA
});