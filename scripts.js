// Toggle font size for accessibility
document.getElementById('font-toggle').addEventListener('click', function() {
    document.body.classList.toggle('large-font');
    this.textContent = document.body.classList.contains('large-font') ? 'Decrease Font Size' : 'Increase Font Size';
});
