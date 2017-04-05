import { PeliculerosPage } from './app.po';

describe('peliculeros App', () => {
  let page: PeliculerosPage;

  beforeEach(() => {
    page = new PeliculerosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
