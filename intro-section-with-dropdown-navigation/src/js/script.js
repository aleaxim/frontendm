function toggleFeatures() {
  const dropdown = document.getElementById('nav-features');
  dropdown.classList.toggle('hidden');
}

function toggleCompany() {
  const dropdown = document.getElementById('nav-company');
  dropdown.classList.toggle('hidden');
}

function toggleHamburger() {
  const burger = document.getElementById('burger-menu-show');
  burger.classList.toggle('hidden');
}

function toggleFeaturesMobile() {
  const dropdown = document.getElementById('mobnav-features');
  const arrow = document.getElementById('mobnav-feat-arrow');

  if (dropdown.classList.contains('mobnav-close')) {
    dropdown.classList.replace('mobnav-close', 'mobnav-show');
    arrow.classList.replace('after:content-arrowDownIcon', 'after:content-arrowUpIcon');
  } else {
    dropdown.classList.replace('mobnav-show', 'mobnav-close');
    arrow.classList.replace('after:content-arrowUpIcon', 'after:content-arrowDownIcon');
  }
}

function toggleCompanyMobile() {
  const dropdown = document.getElementById('mobnav-company');
  const arrow = document.getElementById('mobnav-comp-arrow');

  if (dropdown.classList.contains('mobnav-close')) {
    dropdown.classList.replace('mobnav-close', 'mobnav-show');
    arrow.classList.replace('after:content-arrowDownIcon', 'after:content-arrowUpIcon');
  } else {
    dropdown.classList.replace('mobnav-show', 'mobnav-close');
    arrow.classList.replace('after:content-arrowUpIcon', 'after:content-arrowDownIcon');
  }
}
