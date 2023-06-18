module.exports = (plop) => {
    plop.setGenerator('components', {
      description: 'Create a components',
      prompts: [
        {
          type: 'list',
          name: 'type',
          message: 'Which type name is it? => src/components/${project}/${type}/${components} :',
          choices: [
            { name: 'part', value: 'part' },
            { name: 'template', value: 'template' },
            { name: 'view', value: 'view' },
          ],
        },
        {
          type: 'input',
          name: 'project',
          message:
            'What is a project name? => src/components/${project}/${type}/${components} * 共通は common :',
        },
        {
          type: 'input',
          name: 'name',
          message: 'What is a components name? => src/components/${project}/${type}/${components} :',
        },
      ],
      actions: (data) => {
        const path = `../src/components/${data.project}/${data.type}/`;
  
        switch (data.type) {
          case 'part':
            return [
              // components
              {
                type: 'add',
                path: path + '{{pascalCase name}}/index.tsx',
                templateFile: 'template/part.index.tsx.hbs',
              },
              // props for test and storybook
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.props.ts',
                templateFile: 'template/part.props.ts.hbs',
              },
              // test
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'template/part.test.tsx.hbs',
              },
              // storybook
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'template/part.stories.tsx.hbs',
              },
            ];
          case 'template':
            return [
              // container
              {
                type: 'add',
                path: path + '{{pascalCase name}}/index.tsx',
                templateFile: 'template/common.container.tsx.hbs',
              },
              // presenter
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'template/common.presenter.tsx.hbs',
              },
              // test for presenter
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'template/common.presenter.test.tsx.hbs',
              },
              // props for test and storybook
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.props.ts',
                templateFile: 'template/common.props.ts.hbs',
              },
              // storybook
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'template/common.stories.tsx.hbs',
              },
            ];
          case 'view':
            return [
              // container
              {
                type: 'add',
                path: path + '{{pascalCase name}}/index.tsx',
                templateFile: 'template/common.container.tsx.hbs',
              },
              // presenter
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'template/common.presenter.tsx.hbs',
              },
              // test for presenter
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                templateFile: 'template/common.presenter.test.tsx.hbs',
              },
              // props for test and storybook
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.props.ts',
                templateFile: 'template/common.props.ts.hbs',
              },
              // storybook
              {
                type: 'add',
                path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'template/common.stories.tsx.hbs',
              },
            ];
          default:
            return [];
        }
      },
    });
  };