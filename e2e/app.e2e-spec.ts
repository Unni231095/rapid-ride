import { RapidRidePage } from './app.po';

describe('rapid-ride App', () => {
  let page: RapidRidePage;

  beforeEach(() => {
    page = new RapidRidePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
