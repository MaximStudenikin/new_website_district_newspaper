# news-latest

Блок состоит из 2-x списков которы размещены радом друг с другом

## Компонеты
```
__block.scss      // Элемент блок
__img.scss        // Элемент фото по дефолту
__img_size_big.sc // Модификтор фото
__item.scss       // Элемент списка по дефолту
__item_direction_ // Модификатор элемента списка
__link.scss       // Миксин ссылки
__list.scss       // Элемент список
__row.scss        // Элемент сторка
news-latest.pug   // Разметка
news-latest.scss  // Стили блока и иморт
```

[demo](https://codepen.io/richat/pen/pORxLW)

### Разметка блока

```pug
mixin news-latest__item(itemName, imgSrc, data, title, imgSize)
	- var dataTime = data
	- var bigImg = imgSize
		li(class=itemName)
			case bigImg
				when 0
					.news-latest__img
						img.img-teg(src= imgSrc, alt='alt')
				when 1
					.news-latest__img.news-latest__img_size_big
						img.img-teg(src= imgSrc, alt='alt')
			.news-latest__row
				a(href='#').link.news-latest__link= title			
				time(datetime= dataTime).publication-date= dataTime
			
section.news-latest
	a.link.link_big(href='#') Новости
	.news-latest__block
		ul.news-latest__list
			+news-latest__item('news-latest__item', 'https://source.unsplash.com/user/nikolayv/1200x900', '17.02.2018', 'Культ личности означает аутотренинг', 1)
			+news-latest__item('news-latest__item news-latest__item_direction_row', 'https://source.unsplash.com/user/nikolayv/1200x900', '17.02.2018', 'Культ личности означает аутотренинг', 0)
			+news-latest__item('news-latest__item news-latest__item_direction_row', 'https://source.unsplash.com/user/nikolayv/1200x900', '17.02.2018', 'Культ личности означает аутотренинг', 0)
			+news-latest__item('news-latest__item news-latest__item_direction_row', 'https://source.unsplash.com/user/samuelzeller/1200x900', '17.02.2018', 'Культ личности означает аутотренинг', 0)
		ul.news-latest__list
			+news-latest__item('news-latest__item', 'https://source.unsplash.com/user/samuelzeller/1200x900', '17.02.2018', 'Культ личности означает аутотренинг', 1)
			+news-latest__item('news-latest__item news-latest__item_direction_row', 'https://source.unsplash.com/user/samuelzeller/1200x900', '17.02.2018', 'Культ личности означает аутотренинг', 0)
			+news-latest__item('news-latest__item news-latest__item_direction_row', 'https://source.unsplash.com/user/samuelzeller/1200x900', '17.02.2018', 'Культ личности означает аутотренинг', 0)
			+news-latest__item('news-latest__item news-latest__item_direction_row', 'https://source.unsplash.com/user/samuelzeller/1200x900', '17.02.2018', 'Культ личности означает аутотренинг', 0)
```