class AccountChain {
	constructor() {
		this._account = null;
	}
}

class AccountNode {
	constructor(account=null, next=null) {
		this._account = account;
		this._next = null;
		this._maxBalance = 10000;
	}

	get account() {
		return this._account;
	}

	get next() {
		return this._next;
	}

	get maxBalance() {
		return this._maxBalance;
	}

	set account(account) { 
		this._account = account;
	}

	set next(account) {	
		this._next = account;
	}

	set maxBalance(maxBalance) {
		this._maxBalance = maxBalance;
	}

}

export default AccountChain;