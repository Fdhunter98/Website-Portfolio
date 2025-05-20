'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

// portfolio filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
let lastClickedBtn = filterBtns[0];

// photography filter variables
const photoFilterItems = document.querySelectorAll("[data-photo-filter-item]");
const photoFilterBtns = document.querySelectorAll("[data-photo-filter-btn]");
let lastClickedPhotoBtn = photoFilterBtns[0];

// portfolio filter function
const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// photography filter function
const photoFilterFunc = function (selectedValue) {
  for (let i = 0; i < photoFilterItems.length; i++) {
    if (selectedValue === "all") {
      photoFilterItems[i].classList.add("active");
    } else if (selectedValue === photoFilterItems[i].dataset.category) {
      photoFilterItems[i].classList.add("active");
    } else {
      photoFilterItems[i].classList.remove("active");
    }
  }
};

// portfolio filter button event listeners
if (filterBtns) {
  for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) {
        selectValue.innerText = this.innerText;
      }
      filterFunc(selectedValue);

      if (lastClickedBtn) {
        lastClickedBtn.classList.remove("active");
      }
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }
}

// photography filter button event listeners
if (photoFilterBtns) {
  for (let i = 0; i < photoFilterBtns.length; i++) {
    photoFilterBtns[i].addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      photoFilterFunc(selectedValue);

      if (lastClickedPhotoBtn) {
        lastClickedPhotoBtn.classList.remove("active");
      }
      this.classList.add("active");
      lastClickedPhotoBtn = this;
    });
  }
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
if (formInputs) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      // check form validation
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
if (navigationLinks && pages) {
  for (let navIndex = 0; navIndex < navigationLinks.length; navIndex++) {
    navigationLinks[navIndex].addEventListener("click", function () {
      for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
        if (this.textContent.toLowerCase() === pages[pageIndex].dataset.page) {
          pages[pageIndex].classList.add("active");
          // Remove active class from all navigation links
          navigationLinks.forEach(link => link.classList.remove("active"));
          // Add active class only to the clicked navigation link
          this.classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[pageIndex].classList.remove("active");
        }
      }
    });
  }
}
