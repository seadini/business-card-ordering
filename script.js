// JavaScript for dynamic interactions in the Business Card Ordering project

document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const quantity = document.getElementById('quantity').value;

    alert(`Order details:\nName: ${name}\nTitle: ${title}\nEmail: ${email}\nQuantity: ${quantity}`);
});