const { test, expect } = require('@playwright/test');
const { CalculatorStart } = require('../pages/CalculatorStart')
const number1 = 1;
const number2 = 2;


test.describe('Basic Calculator test suite', () => {
    let page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    startPage = new CalculatorStart(page);
  });
  test.beforeEach(async () => {
    await startPage.goto();
  });
});

test('If calculator adds correctry on protype build', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.selectOption('#selectBuild', '0') /* Skaiciu keisti nuo 0 iki 10 */
  await page.fill('#number1Field', '13');
  await page.fill('#number2Field', '2');
  await page.selectOption('#selectOperationDropdown', '0');
  await page.click('#calculateButton');
  const rezultatasTextContent = await page.inputValue('#numberAnswerField');
  expect(rezultatasTextContent).toBe('15');
});

test('If calculator adds correctry on 1 build', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.selectOption('#selectBuild', '1') /* Skaiciu keisti nuo 0 iki 10 */
  await page.fill('#number1Field', '13');
  await page.fill('#number2Field', '2');
  await page.selectOption('#selectOperationDropdown', '0');
  await page.click('#calculateButton');
  const rezultatasTextContent = await page.inputValue('#numberAnswerField');
  expect(rezultatasTextContent).toBe('15');
});

test('If calculator substracts correctly on prototype', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.selectOption('#selectBuild', '0') /* Skaiciu keisti nuo 0 iki 10 */
    await page.fill('#number1Field', '13');
    await page.fill('#number2Field', '2');
    await page.selectOption('#selectOperationDropdown', '1');
    await page.click('#calculateButton');
    const rezultatasTextContent = await page.inputValue('#numberAnswerField');
    expect(rezultatasTextContent).toBe('11');
});

test('If calculator substracts correctly on 1 build', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.selectOption('#selectBuild', '1') /* Skaiciu keisti nuo 0 iki 10 */
  await page.fill('#number1Field', '13');
  await page.fill('#number2Field', '2');
  await page.selectOption('#selectOperationDropdown', '1');
  await page.click('#calculateButton');
  const rezultatasTextContent = await page.inputValue('#numberAnswerField');
  expect(rezultatasTextContent).toBe('11');
});

test('If calculator multiplies correctly on prototype build ', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.selectOption('#selectBuild', '0') /* Skaiciu keisti nuo 0 iki 10 */
  await page.fill('#number1Field', '13');
  await page.fill('#number2Field', '2');
  await page.selectOption('#selectOperationDropdown', '2');
  await page.click('#calculateButton');
  const rezultatasTextContent = await page.inputValue('#numberAnswerField');
  expect(rezultatasTextContent).toBe('26');
});

test('If calculator multiplies correctly on 1 build ', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.selectOption('#selectBuild', '1') /* Skaiciu keisti nuo 0 iki 10 */
  await page.fill('#number1Field', '13');
  await page.fill('#number2Field', '2');
  await page.selectOption('#selectOperationDropdown', '2');
  await page.click('#calculateButton');
  const rezultatasTextContent = await page.inputValue('#numberAnswerField');
  expect(rezultatasTextContent).toBe('26');
});

test('If calculator divides correctry on protype build', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.selectOption('#selectBuild', '0') /* Skaiciu keisti nuo 0 iki 10 */
  await page.fill('#number1Field', '13');
  await page.fill('#number2Field', '2');
  await page.selectOption('#selectOperationDropdown', '3');
  await page.click('#calculateButton');
  const rezultatasTextContent = await page.inputValue('#numberAnswerField');
  expect(rezultatasTextContent).toBe('6.5');
});

test('If calculator divides correctry on 1 build', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.selectOption('#selectBuild', '1') /* Skaiciu keisti nuo 0 iki 10 */
  await page.fill('#number1Field', '13');
  await page.fill('#number2Field', '2');
  await page.selectOption('#selectOperationDropdown', '3');
  await page.click('#calculateButton');
  const rezultatasTextContent = await page.inputValue('#numberAnswerField');
  expect(rezultatasTextContent).toBe('6.5');
});

test('If calculator concatenates correctly on protype build', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.selectOption('#selectBuild', '0') /* Skaiciu keisti nuo 0 iki 10 */
  await page.fill('#number1Field', '13');
  await page.fill('#number2Field', '2');
  await page.selectOption('#selectOperationDropdown', '4');
  await page.click('#calculateButton');
  const rezultatasTextContent = await page.inputValue('#numberAnswerField');
  expect(rezultatasTextContent).toBe('132');
});

test('If calculator concatenates correctly on 1 build', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  await page.selectOption('#selectBuild', '1') /* Skaiciu keisti nuo 0 iki 10 */
  await page.fill('#number1Field', '13');
  await page.fill('#number2Field', '2');
  await page.selectOption('#selectOperationDropdown', '4');
  await page.click('#calculateButton');
  const rezultatasTextContent = await page.inputValue('#numberAnswerField');
  expect(rezultatasTextContent).toBe('132');
});