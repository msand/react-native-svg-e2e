const screenShots = [
  'grouping01',
  'InitialCoords',
  'ViewBox',
  'triangle01',
  'cubic01',
];

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a container', async () => {
    await expect(element(by.id('container'))).toBeVisible();
  });

  screenShots.forEach(screenShot => {
    it('should render test ' + screenShot, async () => {
      await element(by.id(screenShot)).tap();
      await expect(element(by.id(screenShot + 'View'))).toBeVisible();
    });
  })
});
