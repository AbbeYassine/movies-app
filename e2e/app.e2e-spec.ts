import { MoviesAppAngular4Page } from './app.po';

describe('movies-app-angular4 App', () => {
  let page: MoviesAppAngular4Page;

  beforeEach(() => {
    page = new MoviesAppAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
