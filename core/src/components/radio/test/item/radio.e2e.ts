import { expect } from '@playwright/test';
import { configs, test } from '@utils/test/playwright';

configs().forEach(({ title, screenshot, config }) => {
  test.describe(title('radio: item'), () => {
    test('should render correctly in list', async ({ page }) => {
      await page.setContent(
        `
        <ion-list>
          <ion-radio-group>
            <ion-item>
              <ion-radio>Enable Notifications</ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-list>
      `,
        config
      );
      const list = page.locator('ion-list');
      await expect(list).toHaveScreenshot(screenshot(`radio-list`));
    });
    test('should render correctly in inset list', async ({ page }) => {
      await page.setContent(
        `
        <ion-list inset="true">
          <ion-radio-group>
            <ion-item>
              <ion-radio>Enable Notifications</ion-radio>
            </ion-item>
          </ion-radio-group>
        </ion-list>
      `,
        config
      );
      const list = page.locator('ion-list');
      await expect(list).toHaveScreenshot(screenshot(`radio-inset-list`));
    });
  });
});

configs({ directions: ['ltr'], modes: ['md'] }).forEach(({ title, screenshot, config }) => {
  test.describe(title('radio: long label in item'), () => {
    test('should render margins correctly when using long label in item', async ({ page }) => {
      await page.setContent(
        `
          <ion-list>
            <ion-radio-group>
              <ion-item>
                <ion-radio justify="start">
                  <ion-label class="ion-text-wrap">Enable Notifications Enable Notifications Enable Notifications</ion-label>
                </ion-radio>
              </ion-item>
            </ion-radio-group>
          </ion-list>
        `,
        config
      );
      const list = page.locator('ion-list');
      await expect(list).toHaveScreenshot(screenshot(`radio-long-label-in-item`));
    });
  });
});
