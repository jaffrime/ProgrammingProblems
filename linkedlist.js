// Linked List with reverse

function LinkedList() {
  this.start = null;
  this.end = null;
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value, null);
  if( ! this.start) {
    this.start = node;
  } else {
  this.end.next = node;
  }
  this.end = node;
};

LinkedList.prototype.show = function() {
  var current = this.start;
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
  recurse(this.start);

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
  var start = this.start;
  recurse(null, start);

  // switch the start with the end
  this.start = this.end;
  this.end = start;
};

//iterative reverse
LinkedList.prototype.reverse = function() {
  var previous_node = null;
  var current_node = this.start;
  var next_node = null;

  // set the first node as the last node
  this.end = current_node;
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
  this.start = previous_node;
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