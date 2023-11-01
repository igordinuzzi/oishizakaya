// Get all tab elements
const tabs = document.querySelectorAll('.tab');

// Add a click event listener to each tab
tabs.forEach(tab => {
  tab.addEventListener('click', function() {
    // Remove 'active' class from all tabs
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    this.classList.add('active');

    // Get the category from the tab's data attribute
    const category = this.getAttribute('data-category');

    // Show the items for the selected category
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
      item.style.display = 'none';
    });

    const categoryItems = document.querySelectorAll(`.${category}`);
    categoryItems.forEach(item => {
      item.style.display = 'block';
    });
  });
});
