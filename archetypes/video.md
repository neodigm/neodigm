---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---

<ul>
    {{ range (.GetTerms "tags") }}
        <li><a href="{{ .Permalink }}">{{ .LinkTitle }}</a></li>
   {{ end }}
</ul>