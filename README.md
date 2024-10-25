# Beauty 
намаялась я с гитом

команды для гита
добавляем все в коммит git  add -A 
git commit -m "added eslint and const for selector" создаем коммит с описанием
проверяем что находимся в ветке main git branch
git fetch для получения изменений из удаленного репозитория
затем объединять изменения вручную с помощью командыgit rebase. используется для объединения изменений из удаленного репозитория в вашу локальную ветку. Она переписывает историю локальной ветки, заменяя коммиты на основе последнего общего коммита с удаленной веткой.
потом git push

потом не стал видеть VC Code один из файлов с тестами, помог ИИ
Нажмите комбинацию клавиш Ctrl + Shift + P.
Введите "workspace settings".
Выберите "Open Workspace User Settings (JSON)".
В открывшемся JSON-файле добавьте следующий код:
"search.exclude": {
    "**/.vscode": true,
    "**/.git": true,
    "**/*.min.*": true,
    "**/node_modules": true,
    "**/bower_components": true,
    "**/build": true,
    "**/dist": true,
    "**/output": true,
    "**/public": true,
    "**/coverage": true,
    "**/tmp": true,
    "**/tests": true,
    "**/vendor": true,
    "**/target": true,
    "**/logs": true,
    "**/test": true,
    "**/spec": true
},
"search.excludeDefaults": {
    "**/.vscode": true,
    "**/.git": true,
    "**/*.min.*": true,
    "**/node_modules": true,
    "**/bower_components": true,
    "**/build": true,
    "**/dist": true,
    "**/output": true,
    "**/public": true,
    "**/coverage": true,
    "**/tmp": true,
    "**/tests": true,
    "**/vendor": true,
    "**/target": true,
    "**/logs": true,
    "**/test": true,
    "**/spec": true
},
"search.followSymlinks": false


дальше аллюр  - смотри как надо добавлять зависимости
1. должен быть установлен Node.js
2. выполнитькоманду для установки Playwright и Allure Reporter:```bash
npm install playwright @playwright/test allure-playwright
3. в playwright.config.js const AllureReporter = require('allure-playwright'); И const { defineConfig } = require('@playwright/test');добавляю  константы. В module.exports = defineConfig({  reporter: ДОБАВИТЬ ['allure-playwright', { outputFolder: 'allure-results' }],
4. запустить тесты, наполнится аллюр-резалт
5.  загрузить Allure с [официальной страницы](https://docs.qameta.io/allure/) -  лучше Allure Report для Node.js(каталог NPM не добавлен в переменную PATH). добавила node_modules\.bin в переменные окружения
6. добавила в "scripts" в package.json "test": "playwright test", // Запуск тестов, запускает ваши тесты с помощью Playwright.с помощью команды:```bash  npm run test
 "test:file": "playwright test" - запуск тестов в конкретном файле , команда npm run test:file tests/beautypriority/glavnya1.spec.js
    "test:allure": "playwright test && allure generate allure-results --clean -o allure-report", // Запуск тестов и генерация отчета запускать его с помощью команды:   ```bash   npm run test:allure
    "allure:serve": "allure serve allure-results" // Генерация и запуск отчета Allure с помощью команды:   ```bash npm run allure:serve
    "allure:generate": "allure generate allure-results --clean -o allure-report"  быстро и удобно генерировать отчеты Allure из результатов тестов.- запуск с npm run allure:generate
