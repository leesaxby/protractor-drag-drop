const simulateDragDrop = require('../utils/simulateDragDrop.js');

const list1 = () => element.all(by.repeater('item in $ctrl.list'));

describe('Drag and Drop', function() {

  beforeAll(() => {
      browser.get('http://localhost:9999/#/main');
  });

  it('Can drag and drop list item', function() {
      const srcItem = list1().get(0);
      const destItem = list1().get(1);

      expect(list1().get(0).getText()).toEqual('one')

      browser.executeScript(simulateDragDrop, srcItem.getWebElement(), destItem.getWebElement());

      expect(list1().get(0).getText()).toEqual('two')
  });

});
