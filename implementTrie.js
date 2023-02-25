/*
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
*/

//Solution


//supporting
var TrieNode = function() {
  //each node has a children Object and endOfWord boolean indicating if last char of inserted word
  this.children = {}
  this.endOfWord = false;
}

var Trie = function() {
  //a trie has a root that is a TrieNode
  this.root = new TrieNode()
}

//O(n) time: n is length of word
//O(n) space: n is lenght of word
Trie.prototype.insert = function(word) {
  //initialize curr as root of trie
  let curr = this.root
  //iterate through all characters
  for (let c of word) {
    //if c not in children of current node
    if (curr.children[c] === undefined) {
      //assign c in current nodes children to new TreeNode
      curr.children[c] = new TrieNode()
    }
    //move to children[c] node
    curr = children[c]
  }
  //set last c of word as endOfWord
  curr.endOfWord = true;
}

//O(n) time: n is length of word
//O(1) space: constant space
Trie.prototype.search = function(word) {
  //initialize curr as root of trie
  let curr = this.root
  //iterate through all characters
  for (let c of word) {
    //if cant find c in currNode's children, return false
    if (curr.children[c] === undefined) {
      return false
    }
    //move to children[c] node
    curr = curr.children[c]
  }
  //return if currentNode has been marked endOfWord, may only be a substring
  return curr.endOfWord
};

//O(m) time: m is length of prefix
//O(1) space: constant space
Trie.prototype.startsWith = function(prefix) {
  //initialize curr as root of trie
  let curr = this.root
  //iterate through all characters
  for (let c of prefix) {
    //if cant find c in currentNode's children, return false
    if (curr.children[c] === undefined) {
      return false
    }
    //move to children[c] node
    curr = curr.children[c]
  }
  //found a word that has prefix as the prefix
  return true;
}