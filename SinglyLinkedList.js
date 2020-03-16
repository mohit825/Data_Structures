class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    //Insert implementation in Singly Linked List.
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



    //Adding new node at the head position in Linked list. 
    unshift(val) {
        var curr = this.head;
        var newNode = new Node();

        newNode.val = val;
        newNode.next = curr;
        this.head = newNode;
        this.length++
        return newNode;
    }

    //To remove node from the beginning of the list.

    shift() {
        var current = this.head;
        this.head = current.next;
        this.length--
        return current;
    }

    // Removal of tail in List
    pop() {
        if (this.length === 0) return undefined;
        var curr = this.head;
        var newTail = curr;

        while (curr.next) {
            newTail = curr;
            curr = curr.next;
        }
        this.tail = newTail;
        this.length--;
        this.tail.next = null;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this
    }

    //Get value of node by passing index (starting from 0) in get() method

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

    //inserting a node value anywhere in list with arguments as "index, value".
    insert(index, val) {
        if (index >= this.length || index < 0) return null;

        else {
            var current = this.head;
            var currentPlusOne = this.head.next;
            if (index === 0) {
                let newNode = new Node(val);
                newNode.next = this.head;
                this.head = newNode;


            }
            else if (index === this.length - 1) {
                var newNode = new Node(val);
                this.tail.next = newNode;
                this.tail = newNode;
                newNode.next = null;
            }
            else {
                for (let i = 1; i < index; i++) {
                    current = current.next;
                    currentPlusOne = currentPlusOne.next;
                }

                let newNode = new Node(val);
                current.next = newNode;
                newNode.next = currentPlusOne;
            }
            this.length++;
            return this;
        }
    }


    //setting values at particular position
    set(index, val) {
        let curr = this.head;

        if (index >= this.length || index < 0) return null;
        if (this.length === 0) return null;

        if (index === 0) {
            this.head.val = val;
        }
        else if (index === this.length - 1) {
            this.tail.val = val;
        }
        else {
            for (let i = 1; i <= index; i++) {
                curr = curr.next;
            }
            curr.val = val;
            return this
        }
    }

    //to remomve any node by providing index (starting from 0).
    remove(index) {
        if (index >= this.length || index < 0) return null;
        let latest = this.head;
        let previous = this.head;
        let curr = this.head
        let latestPlusOne = this.head.next;
        if (this.length === 0) return null;
        if (index === 0) {
            this.shift();
        }
        else {
            if (index === this.length - 1) {
                this.pop();
            }
            else {
                for (let i = 0; i < index; i++) {
                    latestPlusOne = latestPlusOne.next;
                    latest = latest.next;
                    if (i < index - 1) previous = previous.next
                }
                previous.next = latestPlusOne;
                previous = latestPlusOne;
                this.length--;
            }
        }
        return this;
    }

    // removeDuplicate(){
    //     let curr = this.head;

    //     for(let i = 1 ; i<=this.length; i++){
           
    //         let currPlusOne = curr.next;
    //         for(let j = i+1; j<=this.length; j++){
    //             console.log(curr, currPlusOne, "curr and currplusone")
    //             if(curr.val === currPlusOne.val){
    //                 console.log("match found, removing duplicate")
    //                 this.remove(i);
                    
    //             }
    //             else{
    //                 console.log("no match");
                    
    //             }
    //             currPlusOne = currPlusOne.next;
    //         }
    //         curr = curr.next;
            
    //     }
    //     return this;
    // }


    // this will return the miidle node of linked list.
    
    middle(){
        var curr = this.head;
        if(this.length === 0) return null;
        if(this.length === 1) return this.head;

        else{
                
            var len = this.length;
            var counter = Math.ceil(len/2);
            let temp;
            for(let i=0; i< counter; i++){
                temp = curr;
                curr = curr.next;

            }
            return temp;    
        }
    }

    indexOf(value){
        // console.log(this.head);
        var current  = this.head;
        var indexes = [];
        var valObj = {};
        var  n = 0;
        while(current){
           if(current.val === value){
               indexes.push(n);
           }
            current = current.next;
            n = n+1;
        }
        
        
        return indexes
    }
}

var list = new linkedList();
list.push(3);
list.push(4);
list.push(5);
list.push(3)