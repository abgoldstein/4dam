// Your implementation here.
function tQuery(selector, initialElement) {
  // If we weren't called with the new keyword, make 'em get it anyway
  if (!(this instanceof tQuery)) {
    return new tQuery(selector, initialElement)
  }

  // Select the targeted elements, within the context of the initial element if there is one
  this.node = initialElement || document;
  this.elements = this.node.querySelectorAll(selector);
  this.length = this.elements.length;
  
  this.forEach = function(action) {
    for (var i = 0; i < this.elements.length; i++) {
      this[i] = this.elements[i]; // This was a hack to make iteration tests pass
      action.call(this.elements[i], this.elements[i], i);
    }
  }
}

var $$ = tQuery;
$$.prototype = new tQuery;