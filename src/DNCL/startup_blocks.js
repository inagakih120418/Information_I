// 初期ブロック配置（必要に応じてカスタマイズ）
var xmlText = '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';
var xml = Blockly.Xml.textToDom(xmlText);
Blockly.Xml.domToWorkspace(xml, workspace);
