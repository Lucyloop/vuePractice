This is a repository for VUE projects, I'm looking forward to building some projects I like. 

# Cookbook
1. VUE+HTML = TEMPLATES

2. To output data in html
use syntax: {{ dataObject }}

3. v-bind: -> set attribute to something after | set value of attribute -> shortcut :

4. v-html -> html syntax to be html syntax in html

5. v-on: -> set actions(click, mouseleave...) after | set function on it -> shortcut @

6. event
    6.1. listen to even, event can be input, submit, keyup...
    6.2. event has target attributes, which have values attributes, and other attributes.
    6.3. event has functions, such as keyup has enter after, which means listen to enter key. 
    6.4. you can set function for each event, and in html,  $event, can represent argument. 

7. v-once -> lock content
8. v-model -> shortcut for v-bind:value(set input value as variable ) v-on:input (set input function, to change variable, and then change input value)-> it makes variable changes when input changes
9. computed properties -> just like methods, but use it as objects. to improve efficiency, use computed to output values rather than methods, otherwise, web will call  methods all the time once you click a function. 
10. watch -> watch object change, make data object as function, and value in the function is data object value -> so that when the value changes, the output value will change too. powerful when set a condition for something to happen, and then change. -> basically, it gives chance to change the dataobject when a condition triggers. -> watch can watch data and computed. 
11. methods, computed, watch -> method is executed for every "re-render" cycle of the component. (use for events or data that really needs to be re-evaluated al the time). computed properties are only re-evaluated if one of their "used values" changed. (use for data that depends on other data). watch allows you ro run any code in reacton to some changed data(e.g send http request etc.(use for any non-data update you want to make) .
12. dynamic styling
    12.1. :style is a specific thing for vue to change style correspondingly -> don't use in modern development
    12.2. special syntax for css :class = "{}"
    12.3. array syntax -> "['',{}]"

# law
1. methods is not good option to use as a dynamic variable
# Js
basically, each function has more functions to use to do things.
1. submit.prevent -> avoid modify after submitting
2. in async function, await function can't get global variable, unleass, we save it before async function. 
