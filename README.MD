Обновленный дизайн сайта газеты "Москва За Калужской заставой"
(ОАО "Окружная газета Юго-Западного административного округа")

<div style='color: red'>
    Проект пересобираеться. Файловая структура устарела. В ближайшее время будет актуализирован Readme.
</div>


## Файловая структура

```
build/   # Куда все компилица
dev/     # Папка где лежит все сокровище 
docs/    # Демо
old-code # Весь старый код :D
prod/    # Весь новый код
```
## Древо папки для разработки
```
├───html
│   ├───article
│   ├───components
│   │   ├───banners-slider
│   │   ├───categories
│   │   ├───controls
│   │   ├───feedback-form
│   │   ├───footer
│   │   ├───hamburger-menu
│   │   ├───header
│   │   ├───pagination
│   │   ├───right-side
│   │   ├───section-news
│   │   ├───serch
│   │   ├───slider
│   │   ├───slidershow
│   │   └───teg-cloud
│   ├───config
│   ├───gallery
│   ├───index
│   └───list
├───js
└───scss
    └───config
```
## Grid

[fast-grid](https://github.com/paulzi/fast-grid)

## Используемая система сборки 
```
Gulp
 CLI version 1.4.0
 Local version 4.0.0-alpha.3
````

 ### Зависимости
```
 "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-preset-env": "^1.6.1",
    "browser-sync": "^2.24.4",
    "del": "^3.0.0",
    "fast-grid": "^0.2.3",
    "gulp": "github:gulpjs/gulp#4.0",
    "gulp-autoprefixer": "^4.1.0",
    "gulp-babel": "^7.0.1",
    "gulp-cleancss": "^0.2.2",
    "gulp-concat": "^2.6.1",
    "gulp-fontmin": "^0.7.4",
    "gulp-group-css-media-queries": "^1.2.2",
    "gulp-image": "^4.3.0",
    "gulp-plumber": "^1.2.0",
    "gulp-pug": "^3.3.0",
    "gulp-rename": "^1.2.2",
    "gulp-replace": "^0.6.1",
    "gulp-sass": "^3.2.1",
    "gulp-sass-glob": "^1.0.9",
    "gulp-sourcemaps": "^2.6.4",
    "gulp-svg-sprites": "^4.1.2",
    "gulp-uglify": "^3.0.0",
    "postcss-pxtorem": "^4.0.1"
  }

  "dependencies": {
    "jquery": "^3.3.1",
    "normalize.css": "^7.0.0"
  }
```

-   Демо: https://maximstudenikin.github.io/new_website_district_newspaper
