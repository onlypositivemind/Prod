import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticleList } from './ArticleList';

const article = {
    id: '1',
    title: 'JavaScript новости',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://www.itpt.co.uk/wp-content/uploads/2022/11/Javascript-Image.png',
    views: 2002,
    createdAt: '29.09.2022',
    user: {
        id: '1',
        username: 'Evgenii',
        avatar: 'https://avatars.githubusercontent.com/u/109303573?v=4',
    },
    type: [
        'IT',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: 'CODE',
            code: 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);',
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
} as Article;

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
    view: ArticleView.SMALL,
    isLoading: true,
    articles: [],
};

export const LoadingBig = Template.bind({});
LoadingBig.args = {
    view: ArticleView.BIG,
    isLoading: true,
    articles: [],
};

export const ListSmall = Template.bind({});
ListSmall.args = {
    view: ArticleView.SMALL,
    articles: new Array(9).fill(0).map((el, i) => ({ ...article, id: String(i + 1) })),
    isLoading: false,
};

export const ListBig = Template.bind({});
ListBig.args = {
    view: ArticleView.BIG,
    isLoading: false,
    articles: new Array(3).fill(0).map((el, i) => ({ ...article, id: String(i + 1) })),
};

export const LoadingSmallDark = Template.bind({});
LoadingSmallDark.args = {
    view: ArticleView.SMALL,
    isLoading: true,
    articles: [],
};
LoadingSmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingBigDark = Template.bind({});
LoadingBigDark.args = {
    view: ArticleView.BIG,
    isLoading: true,
    articles: [],
};
LoadingBigDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListSmallDark = Template.bind({});
ListSmallDark.args = {
    view: ArticleView.SMALL,
    articles: new Array(9).fill(0).map((el, i) => ({ ...article, id: String(i + 1) })),
    isLoading: false,
};
ListSmallDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListBigDark = Template.bind({});
ListBigDark.args = {
    view: ArticleView.BIG,
    isLoading: false,
    articles: new Array(3).fill(0).map((el, i) => ({ ...article, id: String(i + 1) })),
};
ListBigDark.decorators = [ThemeDecorator(Theme.DARK)];
