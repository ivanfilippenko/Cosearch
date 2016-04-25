exports.getClass = function(content) {
  var lines = content.split('\n');
  var classStr;
  var isClass = function(str) {
    return (str.indexOf('class ') === 0) || (str.indexOf(' class ') > 0 && (str[0] !== '/*' && str[0] !== '*'));
  };
  var isInterface = function(str) {
    return (str.indexOf('interface ') === 0 || (str.indexOf(' interface ') > 0 && (str[0] !== '/*' && str[0] !== '*')));
  };

  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i].trim();
    if (isClass(lines[i]) || isInterface(lines[i])) {
      if (lines[i][lines[i].length - 1] === '{')
        lines[i] = lines[i].slice(0, -1);

      return {
        lineNumber: i,
        content: lines[i]
      };
    }
  }
  return 'none';
};

exports.getFunctions = function(content) {
  var refined = [];
  var lines = content.split('\n');

  var isFunction = function(str) {
    return ((str.indexOf('public ') === 0 || str.indexOf('private ') === 0) && str.indexOf('class ') === -1);
  };
  var endWithSemicolonOrBracelet = function(str) {
    var lastChar = str[str.length - 1];
    return (lastChar === ';' || lastChar === '{');
  };
  var notContainEqual = function(str) {
    return (str.indexOf(' = ') === -1);
  };
  var containParen = function(str) {
    return (str.indexOf('(') !== -1);
  };
  var notContainNew = function(str) {
    return (str.indexOf(' new ') === -1);
  }

  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i].trim();

    if (isFunction(lines[i]) && endWithSemicolonOrBracelet(lines[i]) && notContainEqual(lines[i]) && containParen(lines[i]) && notContainNew(lines[i])) {
      lines[i] = lines[i].slice(0, -1);
      refined.push({
        lineNumber: i,
        content: lines[i]
      });
    }
  }
  return refined;
};

