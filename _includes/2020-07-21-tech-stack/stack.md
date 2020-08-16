##### Backend

<dl>
{% for column in include.stack.backend.implementation %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
{% for column in include.stack.backend.testing %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

##### Frontend

<dl>
{% for column in include.stack.frontend.implementation %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
{% for column in include.stack.frontend.testing %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>

##### Infrastructure

<dl>
{% for column in include.stack.infrastructure %}
    <dt>{{ column[0] }}</dt>
    <dd>{{ column[1] }}</dd>
{% endfor %}
</dl>