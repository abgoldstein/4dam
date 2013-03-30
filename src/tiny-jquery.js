// Your implementation here.
function $$(selector, initialElement) {
  this.node = initialElement || document;
  this.elements = this.node.querySelectorAll(selector);
  
  this.elements.forEach = function(action) {
    for (var i = 0; i < this.length; i++) {
      action.call(this[i], this[i], parseInt(i));
    }
  }

  return this.elements;
};

var tQuery = $$;