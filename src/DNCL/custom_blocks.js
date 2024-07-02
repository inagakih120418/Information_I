const custom_blocks =
[{
  "type": "drawer_inits",
  "message0": "初期化",
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "drawer_start",
  "message0": "描画",
  "nextStatement": null,
  "colour": 20,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "drawer_color",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_image",
      "src": "./icons/color.png",
      "width": 20,
      "height": 20,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_colour",
      "name": "COLOR",
      "colour": "#000000"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "drawer_font",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_image",
      "src": "./icons/font.png",
      "width": 20,
      "height": 20,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_number",
      "name": "SIZE",
      "value": 11,
      "min": 5,
      "max": 100
    },
    {
      "type": "field_dropdown",
      "name": "FONT",
      "options": [
        [
          "Arial",
          "Arial"
        ],
        [
          "serif",
          "serif"
        ],
        [
          "sans-serif",
          "sans-serif"
        ],
        [
          "monospace",
          "monospace"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "drawer_line",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_image",
      "src": "./icons/line.png",
      "width": 20,
      "height": 20,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_multilinetext",
      "name": "POINTS",
      "text": "0,0\n30,40"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "drawer_area",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_image",
      "src": "./icons/area.png",
      "width": 20,
      "height": 20,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_multilinetext",
      "name": "POINTS",
      "text": "0,0\n30,40,\n50,10"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "drawer_oval",
  "message0": "%1 x %2 y %3 横半径 %4 縦半径 %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./icons/oval.png",
      "width": 20,
      "height": 20,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_number",
      "name": "X",
      "value": 0,
      "min": 0,
      "max": 200
    },
    {
      "type": "field_number",
      "name": "Y",
      "value": 0,
      "min": 0,
      "max": 200
    },
    {
      "type": "field_number",
      "name": "XRADIUS",
      "value": 50,
      "min": 1,
      "max": 200
    },
    {
      "type": "field_number",
      "name": "YRADIUS",
      "value": 50,
      "min": 1,
      "max": 200
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "drawer_rect",
  "message0": "%1 x %2 y %3 幅 %4 高 %5",
  "args0": [
    {
      "type": "field_image",
      "src": "./icons/rect.png",
      "width": 20,
      "height": 20,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_number",
      "name": "X",
      "value": 0,
      "min": 0,
      "max": 200
    },
    {
      "type": "field_number",
      "name": "Y",
      "value": 0,
      "min": 0,
      "max": 200
    },
    {
      "type": "field_number",
      "name": "WIDTH",
      "value": 50,
      "min": 1,
      "max": 200
    },
    {
      "type": "field_number",
      "name": "HEIGHT",
      "value": 50,
      "min": 1,
      "max": 200
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "drawer_text",
  "message0": "%1 %2 y %3 %4",
  "args0": [
    {
      "type": "field_image",
      "src": "./icons/text.png",
      "width": 20,
      "height": 20,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "field_number",
      "name": "X",
      "value": 30,
      "min": 0,
      "max": 200
    },
    {
      "type": "field_number",
      "name": "Y",
      "value": 30,
      "min": 0,
      "max": 200
    },
    {
      "type": "field_input",
      "name": "TEXT",
      "text": "テキスト"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 330,
  "tooltip": "",
  "helpUrl": ""
}]
