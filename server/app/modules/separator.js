exports.parenSeparator = function(str) {
  var parens = ['(', ')', '[', ']', '<', '>', '{', '}'];
  var indexes = [];
  for (var i = 0; i < str.length; i++) {
    if (parens.indexOf(str[i]) > -1) {
      indexes.push(i);
    }
  }

  for (var i = indexes.length - 1; i >= 0; i--) {
    str = str.substr(0, indexes[i]) + ' ' + str[indexes[i]] + ' ' + str.substr(indexes[i] + 1);
  }
  return str;
};

exports.camelSeparator = function(str) {
  var cWords = ['TCP', 'UDP', 'DNS', 'RPC', 'RARP', 'BOOTP', 'DHCP', 'IGMP', 'SNMP',
   'RIP', 'OSPF', 'BGP', 'CIDR', 'FTP', 'TFTP', 'SMTP', 'NFS', 'HTTP', 'HTTPS', 'UTF',
   'JSON', 'XML', 'HTML', 'XHTML', 'YAML', 'TAR', 'ZIP', 'RAR', 'JPEG', 'GIF', 'GZIP', 'MOD', 'TXT',
   'GNU', 'MIT', 'ASCII', 'SOAP', 'IO', 'PUT', 'POST', 'GET', 'DELETE', 'NAS', 'NFS', 'HDFS', 'VFS', 'HFS'];

  var words = str.split(' ');
  var changed;
  var foundIndex;
  var everUsedCWords = false;
  for (var i = 0; i < words.length; i++) {
    // check cwords first
    for (var j = 0; j < cWords.length; j++) {
      foundIndex = words[i].indexOf(cWords[j]);
      if (foundIndex > -1) {
        words[i] = words[i].substr(0, foundIndex - 1) + ' ' + words[i].substr(foundIndex, cWords[j].length) + ' ' + words[i].substr(foundIndex + cWords[j].length);
        everUsedCWords = true;
      }
    }
    if (everUsedCWords) continue;

    // no cwords case
    changed = words[i].replace(/([A-Z])/g, ' $1');
    if (words[i] !== changed) {
      words[i] = words[i] + ' ' + changed;
    }
  }
  return words.join(' ');
};