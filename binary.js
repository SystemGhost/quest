function Node(data) {
	this.data = data;
	//this.parent = null;
	this.left = null;
	this.right = null;
};

function Tree(value) {
	var node = new Node(value);
	this.root = node;
};

Tree.prototype.add = function(value)
{
	var newNode = new Node(value);

	this.addRecurs(this.root, newNode);

	return newNode;
};

Tree.prototype.addRecurs = function(curNode, newNode)
{
	if(curNode.data > newNode.data)
	{
		if(curNode.left == null)
		{
			curNode.left = newNode;
			//newNode.parent = curNode;
		}
		else
		{
			this.addRecurs(curNode.left, newNode);
		}
	}
	else
	{
		if(curNode.right == null)
		{
			curNode.right = newNode;
			//newNode.parent = curNode;
		}
		else
		{
			this.addRecurs(curNode.right, newNode);
		}
	}
};

Tree.prototype.show = function()
{
	this.print(this.root);
};

Tree.prototype.print = function(curNode)
{
	if(curNode)
	{
		this.print(curNode.left);
		console.log(curNode.data);
		this.print(curNode.right);
	}
};
/*
Tree.prototype.removeNode = function(root, value)
{
	if(root == null)
		return null;

	var curNode;

	if(value == root.data)
	{
		if(root.left == null)
		{
			curNode = root.right;
			delete root;
			return curNode;
		}

		curNode = root.left;
		while(curNode.right)
		{
			curNode = curNode.right;
		}

		curNode.right = root.right;
		return root.left;
	}

	if(value < root.data)
	{
		root.left = this.removeNode(root.left, value);
	}
	else
	{
		root.right = this.removeNode(root.right, value);
	}

	return curNode;
}*/

Tree.prototype.min = function()
{
	return this.minimum(this.root);
};

Tree.prototype.max = function()
{
	return this.maximum(this.root);
};


Tree.prototype.minimum = function(curNode)
{
	if(curNode.left == null) return curNode;
	return this.minimum(curNode.left);
};

Tree.prototype.maximum = function(curNode)
{
	if(curNode.right == null) return curNode;
	return this.maximum(curNode.right);
};

Tree.prototype.delete = function(value)
{
	return this.removeNode(this.root, value);
};

Tree.prototype.removeNode = function(root, value)
{
	if(root == null) return root;
	
	if(value < root.data)
	{
		root.left = this.removeNode(root.left, value);
	}
	else if(value > root.data)
	{
		root.right = this.removeNode(root.right, value);
	}
	else if(root.left != null && root.right != null)
	{
		root.data = this.minimum(root.right).data;
		root.right = this.removeNode(root.right, root.data);
	}
	else
	{
		if(root.left != null)
			root = root.left;
		else
			root = root.right;
	}
	return root;
};
/*
Tree.prototype.delete = function(value)
{
	if(this.root == null)
		return null;

	//var curNode = this.removeNode(this.root, value);
//НУЖНО РЕКУРСИВНОЕ УДАЛЕНИЕ!
	var deleteNode = this.searchNode(this.root, value);
	prevNode = deleteNode.parent;

	//return prevNode;

	if(deleteNode != null)
	{
		console.log("deleteNode != null");


		if(deleteNode.left == null)
		{
			if(deleteNode.right == null)	//all lead is empty
			{
				if(prevNode.data > deleteNode.data)	//check for normal leaf null
				{
					prevNode.left = null;
					deleteNode.parent = null;
					delete deleteNode;
					//console.log("return");
					return prevNode;
				}
				else
				{
					prevNode.right = null;
					deleteNode.parent = null;
					delete deleteNode;
					//console.log("return");
					return prevNode;
				}
			}
			else
			{
				if(prevNode.data > deleteNode.right.data)
				{
					prevNode.left = deleteNode.right;
					deleteNode.right.parent = prevNode;
					delete deleteNode;
					return prevNode;
				}
				else
				{
					prevNode.right = deleteNode.right;
					deleteNode.right.parent = prevNode;
					delete deleteNode;
					return prevNode;
				}
			}
		}
	}
	else
	{
		console.log("deleteNode not searched");
	}

	return deleteNode;
};*/

Tree.prototype.searchNode = function(curNode, value)
{
	if(curNode == null)
		return null;

	if(curNode.data == value)
	{
		return curNode;
	}

	if(curNode.data > value)
	{
		//console.log("curNode.data > value");
		curNode = this.searchNode(curNode.left,value);
	}
	else
	{
		//console.log("curNode.data < value");
		curNode = this.searchNode(curNode.right, value);
	}


	return curNode;
};

Tree.prototype.find = function(value)
{
	return this.searchNode(this.root, value);
};

tr = new Tree(8);
tr.add(4);
tr.add(12);
tr.add(2);
tr.add(6);
tr.add(10);
tr.add(14);
tr.add(1);
tr.add(3);
tr.add(5);
tr.add(7);
tr.add(9);
tr.add(11);
tr.add(13);
tr.add(15);
//tr.show();




