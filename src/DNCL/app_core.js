window.onload = function() {
    // カスタムブロックの登録
    // 事前にcustom_blocks.jsがロードされていること
    Blockly.defineBlocksWithJsonArray(custom_blocks);

    // ワークスペースの作成、引数で様々なオプション指定ができます
    // 事前にtool_box.jsがロードされていること
    workspace = Blockly.inject('blocklyDiv',
        {
            toolbox: toolbox,
            scrollbars : true, 
            sounds : false, 
            trashcan : true, 
            zoom : {
                controls : true, 
                wheel : false, 
                startScale : 1.0, 
                maxScale : 2.0, 
                minScale : 0.5, 
                scaleSpeed : 1.1,
            },
        }
    );

    // JavaScript用のコードジェネレータを初期化
    // 事前にgenerator.jsがロードされていること
    javascript.javascriptGenerator.init(workspace);

    // スタートアップ時にワークスペースに初期ブロックを配置
    // 事前にstartup_blocks.jsがロードされていること
    Blockly.serialization.workspaces.load(startupBlocks, workspace);

    // スタートアップブロック生成ボタン("button0")をクリックしたときの
    // コールバック関数を登録します。
    document.getElementById("button0").addEventListener("click", _showWorkspaceBlocks);

    // ワークスペースの状態が変更したときのコールバック関数を登録します。
    // ブロックの追加やプロパティが変更されるとリアルタイムでコード生成を実施します。
    workspace.addChangeListener(_generateCode);

    // キャンパス領域に絵を描くクラスの生成
    drawer = new CanvasDrawer(document.getElementById("drawer-canvas"));

    // ワークスペース上のブロックをJSON出力する関数
    // 生成されたコードを表示する領域に出力しています
    function _showWorkspaceBlocks() {
        let output = document.getElementById("output");
        output.value = JSON.stringify(Blockly.serialization.workspaces.save(workspace));
    }

    // コード生成する関数
    // 描画ブロックに接続されたブロックを辿り、コードを生成します。
    // 生成されたコードを表示して、そのコード(文字列)をFunctionオブジェクトで
    // 評価し実行しています。
    function _generateCode() {
        let output = document.getElementById("output");
        let start = workspace.getBlocksByType("drawer_start")[0];
        let code = javascript.javascriptGenerator.blockToCode(start);
        output.value = code;
        try {
            Function("{drawer.init();" + code + "}")();
        } catch (error) {
            alert(error);
        }
    }
}
