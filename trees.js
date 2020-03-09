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

    //insert node to binary search tree
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

    //search node in binary search tree, return true or false.
    find(val){
        var current = this.root;
        var newNode  = new Node(val);
        if(this.root === null) return false;
        if(this.root === val) return val;
        else{
            while(true){
                if(val < current.value){
                    if(current.left === null) return false;
                    else{
                        current = current.left;
                    }       
                }
                else if(val > current.value){
                    if(current.right === null) return false;
                    else{
                        current = current.right
                    }
                }
                else{
                    return true;
                }
            }
        }
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