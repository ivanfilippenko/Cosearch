<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>{{ title }}</title>
  <link rel="stylesheet" href="/components/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/styles/default.min.css">
  <link rel="stylesheet" href="/css/style.css">
  {% if ENV_DEVELOPMENT %}
    <script src="http://localhost:35729/livereload.js"></script>
  {% endif %}
</head>
<body>
  <nav class="navbar navbar-fixed-top navbar-default">
    <div class="container">
      {# Brand and toggle get grouped for better mobile display #}
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Cosearch</a>
        <div class="navbar-form navbar-left navbar-search-container" role="search">
          <div class="input-group">
            <input type="text" class="form-control search-text" placeholder="Query">
            <span class="input-group-addon btn-search"><i class="fa fa-search"></i></span>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    {% block content %}{% endblock %}
  </div>
  <script src="/components/jquery/dist/jquery.min.js"></script>
  <script src="/components/bootstrap/dist/js/bootstrap.min.js"></script>
  <script src="/components/mustache.js/mustache.min.js"></script>
  <script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.3.0/highlight.min.js"></script>
  <script src="/js/main.js"></script>
</body>
</html>
