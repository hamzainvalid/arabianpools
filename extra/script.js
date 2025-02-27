// Simulate form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  setTimeout(() => {
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contactForm').reset();
  }, 1000);
});