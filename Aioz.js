let { CustomURL,ScreenShotPath,Email,Password} = process.env;
describe('Build Download :', ()  => {
    it('Login into the Aioz', async () => {
      await browser.url(CustomURL);
      await $("//button[contains(text(),'Sign In')]").waitForDisplayed({ timeout: 15000 });
      await $("//button[contains(text(),'Sign In')]").click();
      await $("//input[@id='email']").setValue(Email);
      await $("//input[@id='password']").setValue(Password);
      await $("//button[contains(text(),'Continue')]").click();
      await browser.pause(5000);
      await browser.saveScreenshot(ScreenShotPath+"1.png");
      await $("(.//*[@class='vjs-marker '])[1]").click();
      await browser.pause(5000)
      await $("(.//*[@class='vjs-marker '])[2]").waitForDisplayed({ timeout: 40000 });
      await browser.pause(3000)
      await browser.saveScreenshot(ScreenShotPath+"2.png");
      await $("(.//*[@class='vjs-marker '])[2]").click();
      await browser.pause(5000)
      await $("(.//*[@class='vjs-marker '])[3]").waitForDisplayed({ timeout: 40000 });
      await browser.pause(3000);
      await browser.saveScreenshot(ScreenShotPath+"3.png");
      await $("(.//*[@class='vjs-marker '])[3]").click();
      await browser.pause(5000);
      await $("(.//*[@class='vjs-marker '])[1]").waitForDisplayed({ timeout: 40000 });
      await browser.pause(1000);
    });
  });