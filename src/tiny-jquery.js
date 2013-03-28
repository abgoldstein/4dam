// Your implementation here.
function $$(selector, initialElement) {
  this.node = initialElement || document;
  this.elements = this.node.querySelectorAll(selector);
  this.elements.forEach = Array.prototype.forEach;

  return this.elements;
};

var tQuery = $$;