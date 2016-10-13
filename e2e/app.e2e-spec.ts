import { Ng2TestCliPage } from './app.po';

describe('ng2-test-cli App', function() {
  let page: Ng2TestCliPage;

  beforeEach(() => {
    page = new Ng2TestCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
