let { CustomURL,CustomTime,Email,Password} = process.env;
describe('Build Download :', ()  => {
    it('Login into the Aioz', async () => {
      await browser.url(CustomURL);
      await $("//button[contains(text(),'Sign In')]").waitForDisplayed({ timeout: 15000 });
      await $("//button[contains(text(),'Sign In')]").click();
      await $("//input[@id='email']").setValue(Email);
      await $("//input[@id='password']").setValue(Password);
      await $("//button[contains(text(),'Continue')]").click();
      await browser.pause(CustomTime);
    });
  });