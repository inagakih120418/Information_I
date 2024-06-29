// Blocklyの初期化
var workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox'),
    grid: {
      spacing: 20,
      length: 3,
      colour: '#ccc',
      snap: true
    },
    trashcan: true,
    scrollbars: true,
    zoom: {
      controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 3,
      minScale: 0.3,
      scaleSpeed: 1.2
    }
  });
  
  // ユーザーが作成したコードを実行
  function runCode() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    try {
      var outputArea = document.getElementById('output');
      outputArea.textContent = '';
      console['log'] = function(message) {
        outputArea.textContent += message + '\n';
      };
      eval(code);
    } catch (e) {
      alert(e);
    }
  }
  