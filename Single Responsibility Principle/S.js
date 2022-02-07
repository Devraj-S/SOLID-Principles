"use strict";
// The SRP requires that a class should have only one reason to change. A class that follows this principle performs just few related tasks. You don’t need to limit your thinking to classes when considering the SRP. You can apply the principle to methods or modules, ensuring that they do just one thing and therefore have just one reason to change.
// Wrong Way - This class isn't following the SRP Principle
class OrderCalculator {
    constructor(totalAmount, taxPercentage, tip, shipping) {
        this.totalAmount = totalAmount;
        this.taxPercentage = taxPercentage;
        this.tip = tip;
        this.shipping = shipping;
    }
    calculateOrder() {
        this.orderValue = this.totalAmount + this.taxPercentage + this.tip + this.shipping;
        return this.orderValue;
    }
    sendEmail() {
        const email = "devraj.singh@neosoftmail.com";
        console.log("Sending mail to " + email + " an amount of " + this.orderValue);
    }
}
// Right Way
class OrderCalculator {
    constructor(totalAmount, taxPercentage, tip, shipping) {
        this.totalAmount = totalAmount;
        this.taxPercentage = taxPercentage;
        this.tip = tip;
        this.shipping = shipping;
    }
    calculateOrder() {
        this.orderValue = this.totalAmount + this.taxPercentage + this.tip + this.shipping;
        return this.orderValue;
    }
}
class emailSender {
    constructor(orderValue) {
        this.orderValue = orderValue;
    }
    sendEmail() {
        const email = "devraj.singh@neosoftmail.com";
        console.log("Sending mail to " + email + " an amount of " + this.orderValue);
    }
}
