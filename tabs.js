// Get all the tab buttons
const tabButtons = document.querySelectorAll('.tab-link');

// Get all the content of tab
const tabContents = document.querySelectorAll('.currenttab');

// Add a click event listener to each tab button
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // when a tab is clicked, call a function to handle the tab switching
    handleTabSwitch(button);
  });
});

// create a function to handle switching of  tab
function handleTabSwitch(clickedButton) {
  // step 1: Remove 'active' class from all tab buttons
  tabButtons.forEach(button => {
    button.classList.remove('active');
    button.setAttribute('aria-selected', 'false');
    button.setAttribute('tabindex', '-1');
  });

  // step 2: add 'active' class to clicked tab
  clickedButton.classList.add('active');
  clickedButton.setAttribute('aria-selected', 'true');
  clickedButton.setAttribute('tabindex', '0');

  // step 3: hide all tab content sections
  tabContents.forEach(content => {
    content.setAttribute('hidden', true);
  });

  const tabId = clickedButton.getAttribute('data-tab'); // Get the ID of the tab that was clicked
  document.getElementById(tabId).removeAttribute('hidden');
};
