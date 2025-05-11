class Account {
	constructor(
		name, balance, maxBalance=null
	) {
		this._name = name;
		this._balance = balance; 
		this._maxBalance = maxBalance; 
	}

	get name() {
		return this._name;
	}

	get balance() { 
		return this._balance;
	}

	get maxBalance() {
		return this._maxBalance;
	}

	set name(newName) {
		this._name = newName;
	}

	set balance(newBalance) { 
		if (newBalance > this.maxBalance) {
			return;
		}
		this._balance = newBalance;
	}

	set maxBalance(newMaxBalance) {
		this._maxBalance = newMaxBalance;
		if (this.balance > this.newMaxBalance) {
			this.balance = this.maxBalance;
		}
	}
}

export default Account;