$(function() {
  var $navbar = $('.navbar-fixed-top'),
      $query = $navbar.find('.search-text'),
      $searchButton = $navbar.find('.btn-search'),
      $resultContainer = $('.result-container'),
      $codeContainer = $('.code-container'),
      $resultItemTemplate = $('#result-item-template');
  
  $codeContainer.css('width', $codeContainer.parent().width() + 'px');
  $codeContainer.css('height', $(document).height() - 80 + 'px');
  
  $query.focus(function() {
    $(this).select();
  });
  
  var search = function(query) {
    // className, content, fileIndex, fileName, lineNumber
    $.ajax({
      url: '/api/search/' + query,
      method: 'GET',
      error: function() {
        alert('error occurred while searching' + query);
      },
      success: function(data) {
        var str = '';
        for (var i = 0; i < data.length; i++) {
          data[i].shortenName = data[i].fileName.substring(data[i].fileName.lastIndexOf('/') + 1);
          str += Mustache.render($resultItemTemplate.html(), data[i]);
        }
        $resultContainer.html(str);
      }
    });  
  };
  
  $query.keyup(function(e) {
    if (e.keyCode === 13) {
      $query.select();
      if ($query.val().trim().length > 0) {
        search(encodeURIComponent($query.val().trim()));
      }  
    }
  });
  
  $searchButton.click(function() {
    if ($query.val().trim().length > 0) {
      search(encodeURIComponent($query.val().trim()));
    }
  });
  
  $resultContainer.on('click', '.result-item', function() {
    $.ajax({
      url: '/api/file/' + encodeURIComponent($(this).data('filename')),
      method: 'GET',
      error: function() {
        alert('error occurred while searching' + query);
      },
      success: function(data) {
        $codeContainer.html(data).show();
        hljs.highlightBlock($codeContainer[0]);
      }
    });
  });
});