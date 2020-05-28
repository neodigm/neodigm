---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---
<hr>
<ul>
    {{ range (.GetTerms "tags") }}
        <li><a href="{{ .Permalink }}">{{ .LinkTitle }}</a></li>
   {{ end }}
</ul>