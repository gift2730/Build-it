// Calculate total price and show summary
function calculateTotal() {
  let checkboxes = document.querySelectorAll('input[name="product"]:checked');
  let delivery = document.querySelector('input[name="delivery"]:checked').value;
  let total = 0;
  let items = [];

  checkboxes.forEach(cb => {
    total += parseFloat(cb.dataset.price);
    items.push(cb.value);
  });

  if (delivery === "Delivery") {
    total += 100;
  }

  document.getElementById("orderSummary").innerHTML =
    "<strong>Items:</strong> " + items.join(", ") + "<br><strong>Total:</strong> R" + total;

  return { items, total, delivery };
}

//text validation
document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let checkboxes = document.querySelectorAll('input[name="product"]:checked');
  if (checkboxes.length === 0) {
    alert("Please select at least one product.");
    return;
  }

  let orderDetails = calculateTotal();
  let receiptContent =
    "=== Buildit Hardware Receipt ===\n\n" +
    "Items Ordered: " + orderDetails.items.join(", ") + "\n" +
    "Delivery Method: " + orderDetails.delivery + "\n" +
    "Total Price: R" + orderDetails.total + "\n\n" +
    "Thank you for shopping with Buildit Hardware!";

  // Create downloadable TXT file
  let blob = new Blob([receiptContent], { type: "text/plain" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "receipt.txt";
  link.click();

  alert("Order placed successfully! Your receipt has been downloaded.");
});

