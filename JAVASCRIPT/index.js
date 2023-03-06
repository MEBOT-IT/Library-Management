
    // Get the date element
    const dateElement = document.querySelector(".date");
    // Update the date text
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, "0");
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();
    dateElement.textContent += ` ${day}, ${monthNames[monthIndex]}, ${year}`;

   
      //for the Dropdown menu
      document.addEventListener("click", (e) => {
        const isDropDownButton = e.target.matches("[data-dropdown-button]");
        if (!isDropDownButton && e.target.closest("[data-dropdown]") != null)
          return;
    //for the opening of the dropdown menu
        let currentDropdown;
        if (isDropDownButton) {
          currentDropdown = e.target.closest("[data-dropdown]");
          currentDropdown.classList.toggle("active");
        }
    // for closing the other drop down menus 
        document
          .querySelectorAll("[data-dropdown].active")
          .forEach((dropdown) => {
            if (dropdown === currentDropdown) return;
            dropdown.classList.remove("active");
          });
      });