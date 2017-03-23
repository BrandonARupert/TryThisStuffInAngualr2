import { TrystuffPage } from './app.po';

describe('trystuff App', () => {
  let page: TrystuffPage;

  beforeEach(() => {
    page = new TrystuffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
