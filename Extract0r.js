//Copyright Jorge Pacora - 2018
window.DataSets = new Object();

$('select').each((index, _Element)=> {
	DataSets[_Element.name] = $('#'+_Element.id+' option').map(function() { return $(this).val(); }).get();
})

console.dir(DataSets)