// Handle form submission
document.getElementById("transactionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const amount = document.getElementById("amount").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
    const transactionId = document.getElementById("transactionId").value;

    if (amount && paymentMethod && transactionId) {
        // Simulate transaction processing (replace with actual API call if needed)
        showNotification("Transaction submitted successfully!", true);
        addTransactionToHistory({ amount, paymentMethod, transactionId });
        generateReceipt({ amount, paymentMethod, transactionId });
    } else {
        showNotification("Please fill in all fields.", false);
    }
});

// Function to add transaction to history
function addTransactionToHistory(transaction) {
    const table = document.getElementById("transactionHistory");
    const row = table.insertRow();

    const cellAmount = row.insertCell(0);
    const cellMethod = row.insertCell(1);
    const cellTransactionId = row.insertCell(2);

    cellAmount.textContent = transaction.amount;
    cellMethod.textContent = transaction.paymentMethod;
    cellTransactionId.textContent = transaction.transactionId;
}

// Function to show notification
function showNotification(message, isSuccess) {
    const notification = document.createElement("div");
    notification.className = isSuccess ? "success" : "error";
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000); // Removes notification after 3 seconds
}

// Function to generate receipt (for demonstration purposes)
function generateReceipt(transaction) {
    const receiptText = `
        Receipt:
        Amount: ${transaction.amount}
        Payment Method: ${transaction.paymentMethod}
        Transaction ID: ${transaction.transactionId}
    `;
    alert(receiptText);
}
