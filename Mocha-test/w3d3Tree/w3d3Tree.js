"use strict"

// exports.treeNode =treeNode;
// exports.contains = contains;
// exports.subtree = subtree;

function TreeNode(value) {
    this.value = value;
    this.descendants = [];
}
// create nodes with value
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

// associate root with its descendants  print values
abe.descendants.push(homer);
homer.descendants.push(bart, lisa, maggie);
console.log(abe.value);
console.log(homer.value);

// check the existence of name in the tree
function contains(tree, name) {
    console.log("contains", tree, name);
    let match = false;
    if (tree.value === name)
        return true;
    if (Array.isArray(tree)) {
        tree.forEach(function(item) {
            console.log("Inside forEach", item, value, name);
            if (item.value === name) {
                console.log("item match")
                match = true;
            } else if (item.descendents.length > 0) {
                console.log("Inside item descendants", item, value, name);
                match = containsRecursion(item.descendents, name);
            }
        });

    } else if (tree.descendents.length > 0) {
        match = containsRecursion(tree.descendents, name);
    }
    return match;
}
console.log("contains", containsRecursion(abe, "Lisa"));

function printName(node) {

    if (node.descendents === null) {
        console.log("name:", node.value)
    } else {
        /* the node reduction */
        console.log("name:", node.value)
        for (let child of node.descendents) {
            printName(child)
        }
    }
}
console.log(printName(Lisa));



function subtree(TreeNode, target) {
    /* base case -- if children is null or empty */
    if (subtree.descendents === []) {
        if (TreeNode.value === target) {
            return TreeNode;
        } else {
            return undefined;
        }
    } else { //reductive recursion step
        let childResult = null;
        if (TreeNode.value === target) {
            return TreeNode;
        }
        for (let child of TreeNode.descendents) {
            childResult = subtree(child, target);
            if (childResult === TreeNode) {
                return TreeNode;
            }
        }
        return undefined; //did not find the target 
    }
}

console.log("expect true", subtree(abe, "Abe"));


/* 4. Create a new constructor function ListNode (based on TreeNode below) and use it to generate a
linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree. */
// const LEFT = 0;
// const RIGHT = 1;

// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.descendants = [];
//     this.parent = null;
//   }

//   get left() {
//     return this.descendants[LEFT];
//   }

//   set left(node) {
//     this.descendants[LEFT] = node;
//     if (node) {
//       node.parent = this;
//     }
//   }

//   get right() {
//     return this.descendants[RIGHT];
//   }

//   set right(node) {
//     this.descendants[RIGHT] = node;
//     if (node) {
//       node.parent = this;
//     }
//   }
// }

/* 
5. Given a target value in the list, return the node that contains the target value or null if no match.
findListNode(list, “Bart”) */



/* 6. Write a recursive function, treeModifier, that will take a tree and a modifier function as
parameters. Walk through the tree and apply the function to each node. The function should
apply the following operations to each node. treeModifier(tree, modiferFunc)
• allCaps(node) will change the value of a node to be all caps.
• addStars(node) will change the value to have *** in front and behind the node value.
• reverseNode(node) will reverse the string of the node value. Abe -> ebA
Call your recursive function with each of these modifier functions. */

function treeModifier(treeNode, modFunc) {
    modFunc(treeNode);
    if (treeNode.descendents.length === 0) {
        return undefined;
    } else { //loop through the array of descendents and recursively call treeModifier
        for (const node of treeNode.descendents) {
            treeModifier(node, modFunc);
        }
    }
}

function caps(node) {
    node.value = node.value.toUpperCase();
}

console.log("the tree modifier reuls", treeModifier(abe, caps));
console.log('now tree has stars', abe);

/*7- Write a recursive function, treeCollector(tree) that will walk the tree and collect the values of
each node into an array [“Abe”, “Homer”, “Bart”, “Lisa”, “Maggie”] for this tree. You may want
to use an accumulator variable that is external to the function to hold the values. */
// let lisa = { name: "Lisa", next: null }
// let berta = { name: "Berta", next: null }
// let maggie = { name: "Maggie", next: null }
// let hommer = { name: "Hommer", next: [maggie, berta, lisa] }
// let abe = { name: "Abe", next: hommer }
//console.log(abe);

function linkedlist(arg) {
    let x = arg.name;
    let z = arg.next;
    if (z === null) {
        return x
    } else {
        for (let y in arg.name) {
            linkedlist(y)

        }
    }
    return x, z;
}
console.log(linkedlist(abe));

/*
9. Write code to illustrate the use of the rest operator 
a. In a destructurng assignment
b. In a function call
*/