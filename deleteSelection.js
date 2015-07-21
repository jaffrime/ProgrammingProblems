/*
You're given the following API:

window.getSelectedRange(), which returns a Range object representing what text the user has selected. The Range object has the following properties:

startContainer, startOffset: Returns the node and offset at which the selection starts
endContainer, endOffset: Returns the node and offset at which the selection ends
commonAncestorContainer: Returns the deepest node that contains the startContainer and endContainer nodes

Write a function deleteSelection() that deletes the part of the query that the user selected.



<div id="query">What years did <u>Barack Obama</u> attend <u>Harvard</u></div>
*/


/*
//Working

{
startContainer: { node : "#text - What years did", offset: 11 },
endContainer: { node : "u - Barack Obama", offset: 7 },
commonAncestorContainer: {  node : "div#query, children: []  }
}


#text - attend
u - Harvard

array.splice(start, deleteCount[, item1[, item2[, ...]]])

*/
//slice(startOffset, [endOffset])


// this problem is incomplete.

function deleteSelection(selection) {
  if(selection.startContainer.node === selection.endContainer.node) {
    var strSel = selection.startContainer.node.innerHTML;
    selection.startContainer.node.innerHTML = strSel.slice(0, selection.startContainer.offset) + strSel.slice(selection.endContainer.offset);
  } else {

    selection.startContainer.node.innerHTML = selection.startContainer.node.innerHTML.slice(0, selection.startContainer.offset);


    var firstNodeIndex = commonAncestorContainer.indexOf(selection.startContainer.node);
    var lastNodeIndex = commonAncestorContainer.indexOf(selection.lastContainer.node);

    //start
    var indexDiff = lastNodeIndex - firstNodeIndex;

    if(indexDiff > 1) {
      commonAncestorContainer.children.splice(firstNodeIndex, indexDiff);
    };
    //end

    selection.endContainer.node.innerHTML = selection.endContainer.node.innerHTML.slice(selection.endContainer.offset);
  }
}

function deleteNodes(node, firstIndex, lastIndex){

}

deleteSelection(
{
  startContainer: { node : "#text - What years did", offset: 11 },
  endContainer: { node : "u - Barack Obama", offset: 7 },
  commonAncestorContainer: {  node : "div#query"  }
}
);


