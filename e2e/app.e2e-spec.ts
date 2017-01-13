import { Ng2PrototypePage } from './app.po';

describe('ng2-prototype App', function() {
  let page: Ng2PrototypePage;

  beforeEach(() => {
    page = new Ng2PrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
