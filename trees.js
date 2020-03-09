class Node{
    constructor(val){
        this.value  = val;
        this.left = null;
        this.right= null;
    }
}


class binarySearchTree{
    constructor(){
        this.root = null;
    }

    push(val){
        var newNode  = new Node(val);
        if(!this.root){
            this.root = newNode;
        }
        else{
            var current  = this.root;
            while(true){
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }
                    else{
                        current = current.left;
                    }
                }
                else{
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
        return this;
    }
}

var tree = new binarySearchTree();
tree.push(10);
tree.push(5);
tree.push(13);
tree.push(2);
tree.push(7);
tree.push(11);
tree.push(16);




// if(newNode > this.root){
//     if(!this.root.right){
//         this.root.right = newNode
//     }else{
//         this.root.right.push(val)
//     }
// }else{  
//     this.root.left = newNode
// }