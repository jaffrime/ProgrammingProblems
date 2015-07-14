// Linked List with reverse

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value, null);
  if( ! this.head) {
    this.head = node;
  } else {
    this.tail.next = node;
  }
  this.tail = node;

  return node;
};

LinkedList.prototype.remove = function(nodeOrValue) {
  var previous = this.getPreviousNode(nodeOrValue);
  if (previous) {
    var node = previous.next;
    previous.next = node.next;
  } else {
    this.removeHead();
  }
};

LinkedList.prototype.removeHead = function() {
  this.head = this.head.next;
};

LinkedList.prototype.getPreviousNode = function(nodeOrValue) {
  var value = nodeOrValue.data || nodeOrValue;
  var current = this.head;
  if(current.data === value){
     return null;
  }
  else{
    while(current.next){
      if(current.next.data === value){
        return current;
      }
      current = current.next;
    }
    return undefined;
  }
};

LinkedList.prototype.show = function() {
  var current = this.head;
  var arr = [];
  do {
    arr.push(current.data);
    current = current.next;
  } while (current);
  console.log(arr);
};

// recursive
LinkedList.prototype.showReverse = function() {
  var recurse = function(node) {
    if(node.next) {
      recurse(node.next);
    }
    console.log(node.data);
  };
  recurse(this.head);

};

LinkedList.prototype.recurse = function(node) {
  if(node.next) {
    this.recurse(node.next);
  }
  console.log(node.data);
};

// recursive reverse
LinkedList.prototype.reverser = function() {
  var recurse = function(previous_node, current_node) {
    if(current_node.next) {
      recurse(current_node, current_node.next);
    }
    // Switch the next pointer to point backwards.
    current_node.next = previous_node;
  };
  var start = this.head;
  recurse(null, start);

  // switch the start with the end
  this.head = this.tail;
  this.tail = start;
};

//iterative reverse
LinkedList.prototype.reverse = function() {
  var previous_node = null;
  var current_node = this.head;
  var next_node = null;

  // set the first node as the last node
  this.tail = current_node;
  while (current_node) {
    // keep the next node because we switch the next pointer
    next_node = current_node.next;

    // Switch the next pointer to point backwards.
    current_node.next = previous_node;

    // Move both pointers forward.
    previous_node = current_node;
    current_node = next_node;
  }
  // set the start to the newly first node
  this.head = previous_node;
};

function Node(data, next) {
  this.data = data;
  this.next = next;
}

console.log('---NEW---');
console.log('Create the list');
var list = new LinkedList();
  list.add(4);
  list.add(10);
  list.add(1);
  list.add(19);
  list.add(2);
var nodeToRemove = list.add(55);
  list.add(22);

console.log('show the list');
list.show();


console.log('Remove from the list, 1 and node.data = 55');
list.remove(1);
list.remove(nodeToRemove);

console.log('show the list');
list.show();


console.log('show the list in reverse');
list.showReverse();
console.log('reverse the list recursive');
list.reverser();
list.show();
console.log('reverse the list iteratively');
list.reverser();
list.show();