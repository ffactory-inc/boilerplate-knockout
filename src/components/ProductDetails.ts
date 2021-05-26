import * as ko from 'knockout';
import template from './ProductDetails.html';

class ProductDetails {
  name: ko.Observable<string> = ko.observable('Bananas').extend({});

  productCode: ko.Observable<string> = ko.observable().extend({});

  stockCount: ko.Observable<number> = ko.observable().extend({});
}

// The default export returns the component details object to register with KO
export default { viewModel: ProductDetails, template: template };
