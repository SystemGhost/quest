function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
};

function Tree(value) {
	var node = new Node(value);
	this.root = node;
};

Tree.prototype.add = function(value) {
	var newNode = new Node(value);
	this.addRecurs(this.root, newNode);
	return newNode;
};

Tree.prototype.addRecurs = function(curNode, newNode) {
	if ( curNode.data > newNode.data )	{
		if ( curNode.left == null ) {
			curNode.left = newNode;
		}
		else {
			this.addRecurs(curNode.left, newNode);
		}
	}
	else {
		if ( curNode.right == null ) {
			curNode.right = newNode;
		}
		else {
			this.addRecurs(curNode.right, newNode);
		}
	}
};

Tree.prototype.show = function() {
	this.print(this.root);
};

Tree.prototype.print = function(curNode) {
	if ( curNode ) {
		this.print(curNode.left);
		this.print(curNode.right);
	}
};

Tree.prototype.min = function() {
	return this.minimum(this.root);
};

Tree.prototype.max = function() {
	return this.maximum(this.root);
};

Tree.prototype.minimum = function(curNode) {
	if (curNode.left == null ) return curNode;
	return this.minimum(curNode.left);
};

Tree.prototype.maximum = function(curNode) {
	if (curNode.right == null ) return curNode;
	return this.maximum(curNode.right);
};

Tree.prototype.delete = function(value) {
	return this.removeNode(this.root, value);
};

Tree.prototype.removeNode = function(root, value) {
	if ( root == null ) return root;
	if ( value < root.data ) {
		root.left = this.removeNode(root.left, value);
	}
	else if ( value > root.data ) {
		root.right = this.removeNode(root.right, value);
	}
	else if ( root.left != null && root.right != null ) {
		root.data = this.minimum(root.right).data;
		root.right = this.removeNode(root.right, root.data);
	}
	else {
		if ( root.left != null )
			root = root.left;
		else
			root = root.right;
	}
	return root;
};

Tree.prototype.searchNode = function(curNode, value) {
	if ( curNode == null ) return null;
	if ( curNode.data == value ) return curNode;
	if ( curNode.data > value ) {
		curNode = this.searchNode(curNode.left,value);
	}
	else {
		curNode = this.searchNode(curNode.right, value);
	}
	return curNode;
};

Tree.prototype.find = function(value) {
	return this.searchNode(this.root, value);
};





