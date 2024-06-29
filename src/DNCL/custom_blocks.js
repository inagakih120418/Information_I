// 日本語ブロックの定義
Blockly.Blocks['print'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("表示する");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("テキストを表示します");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['print'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'console.log(' + value_text + ');\n';
  return code;
};
