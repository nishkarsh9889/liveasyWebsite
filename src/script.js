document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle dropdown menu visibility
    function toggleDropdown(dropdown) {
        dropdown.classList.toggle("hidden");
    }

    // Function to close all dropdowns except the one being toggled
    function closeAllDropdowns(idToExclude) {
        const dropdowns = document.querySelectorAll("[data-dropdown-toggle]");
        dropdowns.forEach(function(dropdown) {
            const dropdownId = dropdown.getAttribute("data-dropdown-toggle");
            if (dropdownId !== idToExclude) {
                const dropdownMenu = document.getElementById(dropdownId);
                dropdownMenu.classList.add("hidden");
            }
        });
    }

    // Event listeners for dropdown toggles
    const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]");
    dropdownToggles.forEach(function(dropdownToggle) {
        dropdownToggle.addEventListener("click", function() {
            const dropdownId = this.getAttribute("data-dropdown-toggle");
            const dropdownMenu = document.getElementById(dropdownId);
            toggleDropdown(dropdownMenu);
            closeAllDropdowns(dropdownId);
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function(event) {
        const isClickInsideDropdownToggle = event.target.closest("[data-dropdown-toggle]");
        if (!isClickInsideDropdownToggle) {
            closeAllDropdowns();
        }
    });
});
