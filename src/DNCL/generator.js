javascript.javascriptGenerator.forBlock['drawer_init'] = function(block, generator) {
  let code = 'drawer.init();\n';
  return code;
};

javascript.javascriptGenerator.forBlock['drawer_start'] = function(block, generator) {
  let code = '// このコードは自動生成されたものです。\n';
  return code;
};

javascript.javascriptGenerator.forBlock['drawer_color'] = function(block, generator) {
  let colour_color = block.getFieldValue('COLOR');
  let code = 'drawer.color("' + colour_color + '");\n';
  return code;
};

javascript.javascriptGenerator.forBlock['drawer_font'] = function(block, generator) {
  let number_size = block.getFieldValue('SIZE');
  let dropdown_font = block.getFieldValue('FONT');
  let code = 'drawer.font(' + number_size + ', "' + dropdown_font + '");\n';
  return code;
};

javascript.javascriptGenerator.forBlock['drawer_line'] = function(block, generator) {
  let text_points = block.getFieldValue('POINTS');
  let list = text_points.replaceAll(/\s+|,|\n+|\t+/g," ").trim().replaceAll(/\s+/g,",");
  let code = 'drawer.line(false,[' + list + ']);\n';
  return code;
};

javascript.javascriptGenerator.forBlock['drawer_oval'] = function(block, generator) {
  let number_x = block.getFieldValue('X');
  let number_y = block.getFieldValue('Y');
  let number_xradius = block.getFieldValue('XRADIUS');
  let number_yradius = block.getFieldValue('YRADIUS');
  let code = 'drawer.oval(' + number_x +',' + number_y + ',' + number_xradius + ',' + number_yradius + ');\n';
  return code;
};

javascript.javascriptGenerator.forBlock['drawer_area'] = function(block, generator) {
  let text_points = block.getFieldValue('POINTS');
  let list = text_points.replaceAll(/\s+|,|\n+|\t+/g," ").trim().replaceAll(/\s+/g,",");
  let code = 'drawer.line(true,[' + list + ']);\n';
  return code;
};

javascript.javascriptGenerator.forBlock['drawer_rect'] = function(block, generator) {
  let number_x = block.getFieldValue('X');
  let number_y = block.getFieldValue('Y');
  let number_width = block.getFieldValue('WIDTH');
  let number_height = block.getFieldValue('HEIGHT');
  let code = 'drawer.rect(' + number_x +',' + number_y + ',' + number_width + ',' + number_height + ');\n';
  return code;
};

javascript.javascriptGenerator.forBlock['drawer_text'] = function(block, generator) {
  let number_x = block.getFieldValue('X');
  let number_y = block.getFieldValue('Y');
  let text_text = block.getFieldValue('TEXT');
  let code = 'drawer.text(' + number_x +',' + number_y + ',"' + text_text + '");\n';
  return code;
};
