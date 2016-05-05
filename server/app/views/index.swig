{% extends 'layout.swig' %}

{% block content %}
<div class="col-md-6">
  <div class="result-container"></div>
</div>
<div class="col-md-6">
  <div class="code-container"></div>
</div>

{% raw %}
<script type="text/template" id="result-item-template">
  <div class="result-item" 
      data-classname="{{ className }}"
      data-content="{{ content }}"
      data-fileindex="{{ fileIndex }}"
      data-filename="{{ fileName }}"
      data-linenumber="{{ lineNumber }}">
    <div class="classname">{{ className }}</div>
    <div class="content">{{ content }}</div>
    <div class="filename">{{ shortenName }} <span class="linenumber">@ Line {{ lineNumber }}</span></div>
  </div>      
</script>
{% endraw %}
{% endblock %}
