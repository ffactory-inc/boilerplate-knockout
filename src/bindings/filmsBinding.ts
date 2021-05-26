import * as ko from 'knockout';

const filmsBinding = {
  init: (element: HTMLElement, valueAccessor: () => ko.ObservableArray): void => {
    const valueUnwrapped = ko.unwrap(valueAccessor());
    const isPopulatedArray = Array.isArray(valueUnwrapped) && valueUnwrapped.length > 0;
    const text = isPopulatedArray ? valueUnwrapped.join(', ') : 'Unknown';

    element.textContent = text;
  }
} as ko.BindingHandler;

export default filmsBinding;
