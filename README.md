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

