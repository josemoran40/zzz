/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Expression;

/**
 *
 * @author jose_
 */
public class Expression {

	private Expression left;
	private Expression right;
	private String op;
	private Double value;

	public Expression(Expression left, Expression right, String op) {
		this.left = left;
		this.right = right;
		this.op = op;
		this.value = null;
	}

	public Expression(Double value) {
		this.value = value;
	}
	
	

	public Expression execute() {
		
		if(this.left != null){
		Expression leftValue = this.left.execute();
		Expression rightValue = this.right.execute();
		
		
			switch (this.op) {
				case "+":
					this.value = leftValue.getValue() + rightValue.getValue();
					break;
				case "-":
					this.value = leftValue.getValue() - rightValue.getValue();
					break;
				case "*":
					this.value = leftValue.getValue() * rightValue.getValue();
					break;
				case "/":
					this.value = leftValue.getValue() / rightValue.getValue();
					break;
			}
		}

		return this;
	}

	public Expression getLeft() {
		return left;
	}

	public void setLeft(Expression left) {
		this.left = left;
	}

	public Expression getRight() {
		return right;
	}

	public void setRight(Expression right) {
		this.right = right;
	}

	public String getOp() {
		return op;
	}

	public void setOp(String op) {
		this.op = op;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

}
