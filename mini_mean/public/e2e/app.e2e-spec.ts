import { MeanStorePage } from './app.po';

describe('mean-store App', () => {
  let page: MeanStorePage;

  beforeEach(() => {
    page = new MeanStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
