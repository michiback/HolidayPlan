import { HolidayPlanPage } from './app.po';

describe('holiday-plan App', function() {
  let page: HolidayPlanPage;

  beforeEach(() => {
    page = new HolidayPlanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
