/*
You're given a function findNamedEntities(s). Given a string representing an English question, it returns a series of spans representing noun phrases within the question.

E.g.
findNamedEntities("What years did Barack Obama attend Harvard?")
> [[15, 27], [35, 42]]

Write a function renderQuery which renders the query to the DOM with the entities underlined.

E.g.
<div id="query">What years did <u>Barack Obama</u> attend <u>Harvard</u></div>
*/

var wrapQueryWithElement = function(str, queryResults, el) {
  var elStart = '<'+el+'>';
  var elEnd = '</'+el+'>';
  var intModifier = elStart.length + elEnd.length;
  var indexModifier = function(x) { return intModifier * x; };
  var strResult = str;

  for(var i=0; i < queryResults.length; i++) {
	var intCurrentIndexModifier = indexModifier(i);
	var intStartIndex           = queryResults[i][0] + intCurrentIndexModifier;
	var intEndIndex             = queryResults[i][1] + intCurrentIndexModifier;
	var strBefore               = strResult.slice(0, intStartIndex);
	var strReplace              = elStart + strResult.substring(intStartIndex, intEndIndex) + elEnd;
	var strAfter                = strResult.slice(intEndIndex);
	strResult                   = strBefore + strReplace + strAfter;
  }
  return strResult;
};

var strQuery = document.getElementById('before_query').innerHTML;
var namedEntitiesIndices = [[15, 27], [35, 42]];
var result = wrapQueryWithElement(strQuery, namedEntitiesIndices, 'u');
console.log(result);

// document.getElementById('query').innerHTML=result;