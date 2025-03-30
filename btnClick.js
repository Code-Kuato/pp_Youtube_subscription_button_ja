document.addEventListener("DOMContentLoaded", () => {
    const subscribeBtn = document.getElementById("subscribe-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const unsubscribeBtn = document.getElementById("unsubscribe-btn");
    const notificationOptions = document.querySelectorAll(".notification-option");

    subscribeBtn.addEventListener("click", (event) => {
        if (subscribeBtn.classList.contains("subscribe")) {
            // Subscribe button clicked
            subscribeBtn.classList.remove("subscribe");
            subscribeBtn.classList.add("subscribed");
            subscribeBtn.innerHTML = `<i class="fas fa-bell swing-bell"></i> Subscribed <i class="fas fa-chevron-down"></i>`; // Adding the swinging bell icon
            dropdownMenu.classList.remove("hidden"); // Show dropdown menu
        } else if (subscribeBtn.classList.contains("subscribed")) {
            // If the button is in subscribed state, keep the dropdown open
            dropdownMenu.classList.remove("hidden"); // Make sure the dropdown is visible
        }
        event.stopPropagation(); // Prevents dropdown from closing immediately
    });

    unsubscribeBtn.addEventListener("click", () => {
        subscribeBtn.classList.remove("subscribed");
        subscribeBtn.classList.add("subscribe");
        subscribeBtn.textContent = "Subscribe";
        dropdownMenu.classList.add("hidden"); // Hide dropdown when unsubscribed
    });

    /* Handle notification type selection - chat suggestion 
    notificationOptions.forEach(option => {
        option.addEventListener("click", () => {
            const notificationType = option.textContent.trim();
            console.log(`Notification type selected: ${notificationType}`);
        });
    }); */

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (subscribeBtn.classList.contains("subscribed") && !subscribeBtn.contains(event.target)) {
            dropdownMenu.classList.add("hidden");
        }
    });
});