class AccountChain {
	constructor() {
		this.account = null;
	}	


}

class AccountNode {
	constructor(account=null, next=null) {
		this._account = account;
		this._next = null;
	}

	get account() {
		return this._account;
	}

	get next() {
		return this._next;
	}

	set account(account) { 
		this._account = account;
	}

	set next(account) {
		this._next = account;
	}

}

export default AccountChain;