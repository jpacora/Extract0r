# DataSets

Use **Extract0r.js** on your Chrome Console to get DataSet's of the select tags.

> *Requires Jquery on Target.*

```javascript
window.DataSets=new Object();$('select').each((index,_Element)=>{DataSets[_Element.name]=$('#'+_Element.id+' option').map(function(){return $(this).val()}).get()});console.dir(window.DataSets);
```

*Copyright Extract0r.js by Jorge Pacora - 2018*