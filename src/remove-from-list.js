const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k )  {
  class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }

  let current = l;
  let previous = null;

  while (current) {
    if (current.value === k) {
      if (previous === null) {
        // Если элемент находится в начале списка
        l = current.next;
      } else {
        // Если элемент находится в середине или в конце списка
        previous.next = current.next;
      }
    } else {
      // Перемещаем указатель previous и current вперед
      previous = current;
    }

    // Переходим к следующему элементу
    current = current.next;
  }

  return l;
}

module.exports = {
  removeKFromList
};
