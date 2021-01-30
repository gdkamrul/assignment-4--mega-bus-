 
function amountChanger(ticketBooking, isIncrease) {
    var type = document.getElementById(ticketBooking).value
    if (isIncrease == true) {
        document.getElementById(ticketBooking).value = ++type
    }
    else {
        if (type == 0) {
            return
        }
        document.getElementById(ticketBooking).value = --type
    }
    totalUpdate();
}

//  subtotal and total price with tax
function totalUpdate() {
    var economyClassQuantity = document.getElementById('economyclassTicket-quantity').value
    var firstClassQuantity = document.getElementById('firstclassTicket-quantity').value
    var subtotal = firstClassQuantity * 150 + economyClassQuantity * 100;
    document.getElementById('subPrice').innerText = subtotal
    var tax = subtotal * 0.1
    document.getElementById('tax').innerText = tax
    var total = subtotal + tax
    document.getElementById('totalPrice').innerText = total
    return total
}

// confirmation and error
function confirmationArea() {
    document.getElementById('mainarea').style.display = "none"
    var totalPrice = totalUpdate();
    const totalCheck = document.getElementById("totalPrice").innerText;
    if (totalCheck == 0) {
        document.getElementById('noticket-box').style.display = "block"
    }
    else {
        document.getElementById('confirm-box').style.display = "block"
        const economyClass = document.getElementById('economyclass-quantity').value
        const firstClass = document.getElementById('firstclassTicket-quantity').value
        const confirmBox = document.getElementById('confrim-messege')

        //Booking quantity and price 
        if (firstClass > 0 && economyClass > 0) {
            confirmBox.innerText = firstClass + " first class & " + economyClass + " economy class ticket\n\nTotal : $" + totalPrice
        }
        else if (firstClass > 0) {
            confirmBox.innerText = firstClass + " first class ticket\n\nTotal : $" + totalPrice
        }
        else {
            confirmBox.innerText = economyClass + " economy class ticket\n\nTotal : $" + totalPrice
        }
    }
}