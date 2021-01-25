const bootstrapCustomDropdownBtnNodeList = document.querySelectorAll('.bootstrap-dropdown-custom > .btn');

const toggleChevronArrowIcon = (dropdownBtnElement) => {
  const chevronUp = dropdownBtnElement.querySelector('.chevron-up');
  const chevronDown = dropdownBtnElement.querySelector('.chevron-down');

  if (chevronUp.classList.contains('d-none')) {
    chevronUp.classList.remove('d-none')
    chevronDown.classList.add('d-none')
  } else {
    chevronUp.classList.add('d-none')
    chevronDown.classList.remove('d-none')
  }
}

const initBootstrapCustomDropdowns = () => {
  bootstrapCustomDropdownBtnNodeList.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
      toggleChevronArrowIcon(event.target);
    })
  })
}

document.addEventListener('DOMContentLoaded', initBootstrapCustomDropdowns);