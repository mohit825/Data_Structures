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

    //tree traversal method which prints the tree nodes/travsers a tree one time, it goes across the tree.
    breadthFirstSearch(){
        var data = [];
        var queue = [];

        queue.push(this.root);

        while(queue.length){
            var temp = queue.shift();
            data.push(temp);
            if(temp.left){
                queue.push(temp.left);
            }
            if(temp.right){
                queue.push(temp.right)
            }
        }
        return data;
    }

    dfsPreOrder(){
        var data = [];
        var current = this.root;

        function look(node){
            data.push(node);
            if(node.left)look(node.left);
            if(node.right)look(node.right);
        }
        look(current);
        return data;
    }

    dfsPostOrder(){
        var data = [];
        var current = this.root;

        function look(node){
            if(node.left)look(node.left);
            if(node.right)look(node.right);
            data.push(node);
        }
        look(current);
        return data;
    }

    dfsInOrder(){
        var data = [];
        var current = this.root;

        function look(node){
            if(node.left)look(node.left);
            data.push(node);
            if(node.right)look(node.right);
            
        }
        look(current);
        return data;
    }
}

var tree = new binarySearchTree();
// tree.push(10);
// tree.push(5);
// tree.push(13);
// tree.push(2);
// tree.push(7);
// tree.push(11);
// tree.push(16);

tree.push(10);
tree.push(6);
tree.push(15);
tree.push(3);
tree.push(8);
tree.push(20);




// if(newNode > this.root){
//     if(!this.root.right){
//         this.root.right = newNode
//     }else{
//         this.root.right.push(val)
//     }
// }else{  
//     this.root.left = newNode
// }