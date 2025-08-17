// linked list


let linkedList = {
  head: {
    value: 4,
    next: {
      value: 5,
      next: {
        value: 6,
        next: null
      }
    }
  }
}

function consoleLogLinkedListValue(obj) {
  if (obj.head) {
    consoleLogLinkedListValue(obj.head)
  } else {
    console.log(obj.value);
    if (obj.next) {
      consoleLogLinkedListValue(obj.next);
    }

  }


}
consoleLogLinkedListValue(linkedList);









class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new ListNode(5);
let node2 = new ListNode(6);

node1.next = node2;



function LinkedList(head = null) {
  
    this.head = head;
  
  this.size= function() {
    let nodeCount = 0;
    let node = this.head;

    while (node) {
      nodeCount++;
      node = node.next;
    }

    return nodeCount;

  }
  this.clear= function() {
    this.head = null;
  }
  this.getLast= function() {
    let last = this.head;
    if (last) {
      while (last.next) {
        last = last.next;
      }
    }

    return last;
  }
  this.getFirst = function(){
    return this.head;
  }
}

let list = new LinkedList(node1);
console.log(list)
console.log(list.size())
console.log("getLast:", list.getLast())
console.log("getFirst:", list.getFirst())

