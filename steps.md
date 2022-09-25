### 1. Setting up a react project

```
# npm 6.0
$ npm init react-app sahana_x --template typescript

# npm 7+, extra double-dash is needed
$ npm init react-app sahana_x -- --template typescript

# yarn
$ yarn create react-app sahana_x --template typescript

# npx
$ npx create-react-app sahana_x --template typescript
```

### 2. Go to directory and open it

```
$ cd sahana_x

$ code .
```

### 3. Plugins configuration

- Create React App CLI does not provide a way of overriding its internal configuration.
- Therefore need to install a tool that can help us with that.
- `craco` and `react-app-rewired` are popular ones to do that.

- To install `craco` run one of the following.

  ```
  $ yarn add @craco/craco@^6.2.0

  $ npm install @craco/craco@^6.2.0 --save
  ```

- Update the scripts section in _package.json_ file since we need to run `craco` instead of `react-scripts`.

  ```
  "scripts":{
      "start": "craco start",
      "build": "craco build",
      "test:unit": "craco test"
  }
  ```

- Then create a new file named _craco.config.js_ in the root directory and we will add the config overrides there.

  ```
  module.exports = {}
  ```

**Add PostCSS**

- Add dependencies

    ```
    $ yarn add -D stylelint@13.13.1 postcss-import@12.0.1 postcss-extend@1.0.5 postcss-nested@4.2.3 postcss-preset-env@6.7.0 postcss-reporter@6.0.1 precss@4.0.0
    ```

- After that, add configs to _postcss.config.js_ file by creating it in the root.

  ```
  module.exports = {
      plugins: [
          require('stylelint')({
              configFile: 'stylelint.config.js',
          }),
          require('postcss-extend'),
          require('precss'),
          require('postcss-preset-env'),
          //comment if you are not using Tailwind
          require('tailwindcss')('tailwind.config.js'),
          require('postcss-nested'),
          require('autoprefixer')(),
          require('postcss-reporter'),
      ],
  }
  ```

- Update _craco.config.js_.

  ```
  const postcssConfig = require('./postcss.config')
  module.exports = {
      style: {
          postcss: postcssConfig,
      }
  }
  ```

**Add Stylelint**

- Add dependencies

    ```
    $ yarn add -D stylelint-config-css-modules stylelint-config-prettier stylelint-config-recess-order stylelint-config-standard stylelint-scss
    ```

- Add configs to _stylelint.config.js_ file by creating it in the root.

  ```
  module.exports = {
      extends: [
          'stylelint-config-recommended',
          'stylelint-config-standard',
          'stylelint-config-recess-order',
          'stylelint-config-css-modules',
          'stylelint-config-prettier'
      ],
      plugins: ['stylelint-scss'],
      ignoreFiles: ['./coverage/**/*.css', './dist/**/*.css'],
      rules: {
          'at-rule-no-unknown': [
              true,
              {
                  ignoreAtRules:[
                      // ----
                      // Tailwind
                      // ----
                      'tailwind',
                      'apply',
                      'variants',
                      'responsive',
                      'screen'
                  ]
              }
          ],
          'declaration-block-no-duplicate-custom-properties': null,
          'named-grid-areas-no-invalid': null,
          'no-duplicate-selectors': null,
          'no-empty-source': null,
          'selector-pseudo-element-no-unknown': null,
          'declaration-block-trailing-semicolon': null,
          'no-descending-specificity': null,
          'string-no-newline': null,
          // Use camelCase for classes and ids only. Works better with CSS modules.
          // 'selector-class-pattern': /^[a-z][a-zA-Z]*(-(enter|leave)(-(active|to))?)?$/,
          // 'selector-id-pattern': /^[a-z][a-zA-Z]*$/,
          // Limit the number of universal characters in a selector to avoid very slow selectors
          'selector-max-universal': 1,
          // ----
          // SCSS rules
          // ----
          'scss/dollar-variable-colon-space-before': 'never',
          'scss/dollar-variable-colon-space-after': 'always',
          'scss/dollar-variable-no-missing-interpolation': true,
          'scss/dollar-variable-pattern': /^[a-z]+$/,
          'scss/double-slash-comment-whitespace-inside':'always',
          'scss/operator-no-newline-before': true,
          'scss/operator-no-unspaced': ture,
          'scss/selector-no-redundant-nesting-selector': true,
          // Allow SCSS and CSS module keywords beginning with '@'
          'scss/at-rule-no-unknown': null
      },
  }
  ```

- Update VS Code settings(_./vscode/settings.json_).

  ```
  {
      "css.validate": false,
      "less.validate": false,
      "scss.validate": false,
      "vetur.validation.style": false
  }
  ```

**Add Sass**

- Add dependencies

    ```
    $ npm install node-sass --save

    $ yarn add node-sass
    ```

**Add Tailwind**

- Add dependencies

    ```
    $ npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat@^2.2.4 postcss@^7 autoprefixer@^9

    $ yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat@^2.2.4 postcss@^7 autoprefixer@^9
    ```

    ```
    $ npm install -D @tailwindcss/forms

    $ yarn add -D @tailwindcss/forms
    ```

- Create tailwind config file

  ```
  $ npx tailwindcss init -p
  ```

- Update _tailwind.config.file_

    ```
    const colors = require('tailwindcss/colors')

    module.exports = {
    purge: ['./index.html', './src/**/*.{js, ts, jsx, tsx}'],
    mode: 'jit',
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
        extend: {},
        colors: {
            ... colors,
        }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
    }
    ```

- Update the `src/index.css` file.
    
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

**Add Prettier**

- Add *prettier.config.js* to root.

    ```
    module.exports = {
        endOfLine: "lf",
        jsxBracketSameLine: false,
        jsxSingleQuote: true,
        printWidth: 80,
        proseWrap: "never",
        quoteProps: "as-needed",
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: "es5",
        ueTabs: false,
    };
    ```

- Update VS Code settings

    ```
    {
        "editor.formatOnSave": true,
        "editor.formatOnPaste": true,
        "editor.formatOnTyp": false,
        "editor.defaultFormatter": "esbnp.prettier-vscode",
    }
    ```

**TypeScript**

- Update `jsx` of *tsconfig.json* with `react-jsx` or `react-jsxdev`.

- Add `craco-alias` to have imports like `import Component from '@components/common/Component'`

    ```
    $ npm install craco-alias --save-dev

    $ yarn add craco-alias --dev
    ```

- Update *craco.config.js*

    ```
    const postcssConfig = require('./postcss.config')
    const cracoAlias = require('craco-alias')

    module.exports = {
        style: {
            postcss: postcssConfig,
        },
        plugins: [
            {
                plugin: cracoAlias,
                options:{
                    source: 'tsconfig',
                    //baseUrl should be specified
                    //plugin does not take it from tsconfig
                    baseUrl:'./',
                    //tsConfigPath should point to the file where "baseUrl" and "paths" are specified.
                    tsConfigPath: './tsconfig.paths.json',
                },
            },
        ],
    }
    ```

- Create *tsconfig.paths.json* in root directory and update it.

    ```
    {
        "compilerOptions":{
            "paths":{
                "@/*": ["src/*"]
            }
        }
    }
    ```
- Update the *tsconfig.json* file.

    ```
    {
        "extends":"./tsconfig.paths.json",
        "compilerOptions": {
            "target": "es5",
            "lib": [
            "dom",
            "dom.iterable",
            "esnext"
            ],
            "allowJs": true,
            "skipLibCheck": true,
            "esModuleInterop": true,
            "allowSyntheticDefaultImports": true,
            "strict": true,
            "forceConsistentCasingInFileNames": true,
            "noFallthroughCasesInSwitch": true,
            "module": "esnext",
            "moduleResolution": "node",
            "resolveJsonModule": true,
            "isolatedModules": true,
            "noEmit": true,
            "jsx": "react-jsx"
        },
        "include": [
            "src"
        ]
    }
    ```

**Jest, Cypress and Testing**

- Install the dependencies.

    ```
    $ npm install cypress @testing-library/cypress start-server-and-test --save-dev

    $ yarn add cypress @testing-library/cypress --dev
    ```

- After the installation update the *scripts* of *package.json* file.

    ```
    "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test:unit": "craco test",
        "test:e2e:open": "start-server-and-test start http-get://localhost:3000 cypress:open",
        "test:e2e:run": "start-server-and-test start http-get://localhost:3000 cypress:run",
        "cypress:run": "cypress run",
        "cypress:open": "cypress open"
    }
    ```

- Run Cypress and you will find few folders are getting generated (`yarn cypress:open`).
- 

**Formatting code automatically on commit**

- Install dependencies

    ```
    $ npm install husky lint-staged prettier --save-dev

    $ yarn add husky lint-staged prettier --dev
    ```

- Update *package.json* file.

    ```
    "husky": {
        "hooks": {
        "pre-commit": "lint-staged"
        }
    },
    "lint-staged": {
        "*.{ts,tsx}": "eslint",
        "*.{css,scss}": "stylelint",
        "**/*.{js,jsx,ts,tsx,json,css,scss,md}": "prettier -w -u"
    },
    ```

    ### 4. VS Code Extensions

    - ES7 React/Redux/GraphQL/React-Native snippets
    - VSCode React Refactor
    - Prettier
    - ESLint
    - Stylelint
    - GitLens
    - GitHistory
    - Settings Sync
    - Bracket Pair Colorizer 2
    - Auto Close Tag
    - Auto Rename
    - Auto Import
    - Import Cost
    - Jumpy
    - ES6 Snippets
    - i18n Ally
    - Formatting toggle
    - npm intellisense
    - Live Share
    - Better comments
    - Markdownlint
    - Docker
    - Remote - SSH
    - Remoter - WSL
    - Live Server
    - Debugger for Chrome & Debugger for Firefox
    - change-case
    - Regex Previewer
    - DotENV
    - Inline Parameters for VSCode