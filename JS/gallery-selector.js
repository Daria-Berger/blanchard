(() => {

const element =document.querySelector('.gallery__select-choices');
const choises =new Choices(element,{
    shouldSort: false,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    classNames: {
      containerOuter: 'gallery__select',
      containerInner: 'gallery__select-inner',
      input: 'gallery__select-input',
      inputCloned: 'gallery__select-input--cloned',
      list: 'gallery__select-list',
      listItems: 'gallery__select-list--multiple',
      listSingle: 'gallery__select-list--single',
      listDropdown: 'gallery__select-list--dropdown',
      item: 'gallery__select-item',
      itemSelectable: 'gallery__select-item--selectable',
      itemDisabled: 'gallery__select-item--disabled',
      itemChoice: 'gallery__select-item--choice',
      placeholder: 'gallery__select-placeholder',
      group: 'gallery__select-group',
      groupHeading: 'gallery__select-heading',
      button: 'gallery__select-button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-gallery__select'
    },
});
})();