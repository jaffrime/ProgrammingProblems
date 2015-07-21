/*
You're given a function findNamedEntities(s). Given a string representing an English question, it returns a series of spans representing noun phrases within the question.

E.g.
findNamedEntities("What years did Barack Obama attend Harvard?")
> [[15, 27], [35, 42]]

Write a function renderQuery which renders the query to the DOM with the entities underlined.

E.g.
<div id="query">What years did <u>Barack Obama</u> attend <u>Harvard</u></div>
*/

var renderQuery = function(str, queryResults) {
  for(var i=0; i < queryResults.length; i++) {
    strRep = str.substr(queryResults[i][0], queryResults[i][1]);
    str.replace(strRep, '<u>' + strRep + '</u>', queryResults[i][0]);
  }
  document.getElementById('query').innerHTML=str;
};