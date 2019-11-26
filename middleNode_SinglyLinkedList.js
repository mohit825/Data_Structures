class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
    
}
class linkedList{
    constructor(){
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length++;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }

    get(index) {
        var current = this.head;
        if (index >= this.length || index < 0) return null;
        else {
            if (index === 0) return this.head
            for (let i = 1; i <= index; i++) {


                // console.log(current);
                current = current.next;

            }
            return current;
        }
    }

//First approach to get middle node of singlyLinkedList.
    middle(){
        
       let len = this.length;
       let middle = Math.ceil(len/2);
       var middleNode =  this.get(middle-1);
        return middleNode;
    }

////Another approach to get middle node of singlyLinkedList.

    middleNode(){
        let slowPointer = this.head;
        let fastPointer = this.head;

        while(fastPointer.next.next){
            if(fastPointer.next.next) slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
            if(fastPointer.next === null) return slowPointer;
        }
        
    }
}

var list = new linkedList();    
list.push(3);
list.push(4);
list.push(5);
list.push(6);



