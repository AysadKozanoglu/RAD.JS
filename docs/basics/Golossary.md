# Golossary

* View vs Components 
* Function as Dump Components

### View vs Components

Так как **RAD.js** разработан именно как библиотека расширения **Backbone.js** то и программные абстракции должны соответствовать **Backbone.js**, но что делать в случае если вам нужно описать часть програмного кода который не содержит связь с програмной логикой и содержит только часть ответственную за отображение данных.

То есть что делать в случае если вам необходимо что-то, что может быть описано с помощью следующих критериев:

- Описывает как это должно выглядеть
- Не имеет зависимостей от програмного кода и логики 
- Принимает только свойства, данные и коллбэк функции

В этом случае можно воспользоваться вспомогательными функциями шаблонов - [helpers](https://github.com/Rapid-Application-Development-JS/itemplate), которые как раз попадают под указанные критерии. 

**В дальнейшем, мы будем использовать термин `components`, как самый распространенный.**

Основным отличием **Components** от **Views**, являеться, как раз, привязка к логике приложения. Компоненты занимаються только отображением данных и все. Проще всего воспринимать компоненты как расширение шаблонов (чем они по факту и являются).

В тех случаях когда вам нужна привязка к логике приложения, какой либо програмной модели данных или колбеки на жизненый цикл Вашего модуля - необходимо использовать View, как функционально обособленую часть вашего приложения.

> Так же обращаем Ваше внимание, что компоненты не являються **web-components** так как не имеют колбек функций на жизненый цикл и не инкопсулируют стили компонета в себе. Но это не мешает их использовать в качестве расшерений web синтаксиса так же как и **web-components**, так как они могут в себе инкапсулировать логику отображения(не зависимую от приложения) и верстку.

 
-


Глобальные компоненты с глобальной областью видимости. Отличие от компонентов(нет колбеков на жизненый цикл). Отличие от вьюх - когда они привязаны к логике приложения и моделям данных(кусок статьи о глупых и умных компонентах)

> Обратите внимание что атрибуты html елемента не переносяться на прямую на первый элемент компонента, это надо делать вручную
> 
> Также обратите внимание что шаблон не должен иметь один родительский элемент

> Обратите внимание что компиляцию компонента можно произвести с помощью `RAD.template` и с помощью `RAD.template.compileHelper`. Разница состоит в том что в первом случае компонент функция будет скомпелированная с замыканием и у вас не будет прямого доступа к  второму аргументу функции, который используеться в качестве функции рендеринга transclude контента. Во втором случае при компиляции, у вас будет прямой доступ и это позволит вам более изящно и коротко писать код transclude helpers.
> 
> Например, код простейшего transclude helper'aбудет выглядеть следующим образом:
> 
> ``` ejs
> <div><% content(); %></div>
> ```
> 
> ```javascript
> var templateFn = RAD.template.compileHelper(require('./template.ejs'));
> RAD.template.registerHelper('my-custom-div', templateFn);
> ```