exports.CalculatorStart = class CalculatorStart {
    constructor(page) {
        this.page = page;}

    async goto() {
    await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }
}
