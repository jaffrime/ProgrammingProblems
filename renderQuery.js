/*
You're given a function findNamedEntities(s). Given a string representing an English question, it returns a series of spans representing noun phrases within the question.

E.g.
findNamedEntities("What years did Barack Obama attend Harvard?")
> [[15, 27], [35, 42]]

Write a function renderQuery which renders the query to the DOM with the entities underlined.

E.g.
<div id="query">What years did <u>Barack Obama</u> attend <u>Harvard</u></div>
*/

var wrapQueryWithElement = function(query, el) {
  var elStart = '<'+el+'>';
  var elEnd = '</'+el+'>';
  var modifier = elStart.length + elEnd.length;
  var indexModifier = function(x) { return modifier * x; };
  var newStr = query.value;
  var indices = query.indices;

  for(var i=0; i < indices.length; i++) {
    var currentIndexModifier = indexModifier(i);
    var startIndex = indices[i][0] + currentIndexModifier;
    var endIndex = indices[i][1] + currentIndexModifier;
    var strBefore = newStr.slice(0, startIndex);
    var strReplace = elStart + newStr.substring(startIndex, endIndex) + elEnd;
    var strAfter = newStr.slice(endIndex);
    newStr = strBefore+strReplace+strAfter;
  }
  query.value = newStr;
  return query;
};

var renderQuery = function(el, query) {
  el.innerHTML=query.value;
}

var strQuery = document.getElementById('before_query').innerHTML;
var namedEntitiesIndices = [[15, 27], [35, 42]];
var namedEntitiesQuery = {
  value: strQuery,
  indices: namedEntitiesIndices
};

var resultQuery = wrapQueryWithElement(namedEntitiesQuery, 'u');
console.log(resultQuery);

renderQuery(document.getElementById('query'), resultQuery);


