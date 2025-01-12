function Activity(amount) {
    this.setAmount(amount);
}

// Define los métodos del prototipo de Activity
Activity.prototype.setAmount = function (amount) {
    if (amount <= 0) {
        return false;
    } else {
        this.amount = amount;
        return true;
    }
};

Activity.prototype.getAmount = function () {
    return this.amount;
};

// Clase Payment que hereda de Activity
function Payment(amount, receiver) {
    Activity.call(this, amount); // Llamar al constructor de Activity
    this.setReceiver(receiver);
}

// Herencia de Activity
Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

// Métodos específicos de Payment
Payment.prototype.setReceiver = function (receiver) {
    this.receiver = receiver;
    return true;
};

Payment.prototype.getReceiver = function () {
    return this.receiver;
};

// Clase Refund que hereda de Payment
function Refund(amount, sender) {
    Payment.call(this, amount); // Llamar al constructor de Payment
    this.setSender(sender);
}

// Herencia de Payment
Refund.prototype = Object.create(Payment.prototype);
Refund.prototype.constructor = Refund;

// Métodos específicos de Refund
Refund.prototype.setSender = function (sender) {
    this.sender = sender;
    return true;
};

Refund.prototype.getSender = function () {
    return this.sender;
};