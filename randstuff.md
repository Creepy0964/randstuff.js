# RandstuffJS - available methods

## Randstuff.get_random_joke()
Returns object, e.g.:
```json
{
  joke: {
    id: '1300',
    text: 'Попавший в толпу ВДВшников в день ВДВ Дункан Маклауд сильно жалел, что смерть так и не наступит.'
  },
  share: '//vk.com/share.php?url=https://randstuff.ru/joke/1300/&title=%D0%9F%D0%BE%D0%BF%D0%B0%D0%B2%D1%88%D0%B8%D0%B9+%D0%B2+%D1%82%D0%BE%D0%BB%D0%BF%D1%83+%D0%92%D0%94%D0%92%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2+%D0%B2+%D0%B4%D0%B5%D0%BD%D1%8C+%D0%92%D0%94%D0%92+%D0%94%D1%83%D0%BD%D0%BA%D0%B0%D0%BD+%D0%9C%D0%B0%D0%BA%D0%BB%D0%B0%D1%83%D0%B4+%D1%81%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE+%D0%B6%D0%B0%D0%BB%D0%B5%D0%BB%2C+%D1%87%D1%82%D0%BE+%D1%81%D0%BC%D0%B5%D1%80%D1%82%D1%8C+%D1%82%D0%B0%D0%BA+%D0%B8+%D0%BD%D0%B5+%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B8%D1%82.'
}
```
`joke` - a key for necessary information
`joke/id` - joke's id on Randstuff server
`joke/text` - joke's text
Example:
```js
import { Randstuff } from './randstuff.js';s
const rnd = new Randstuff();
rnd.get_random_joke().then((joke) => console.log(`Joke: ${joke["joke"]["text"]}`));
```
<br>

## Randstuff.get_random_fact()
Returns object, e.g.:
```json
{
  fact: {
    id: '597',
    text: 'Автор известного произведения «Дракула» Брэм Стокер также писал детские книги, которые критики назвали «ужасными».'
  },
  share: '//vk.com/share.php?url=https://randstuff.ru/fact/597/&title=%D0%90%D0%B2%D1%82%D0%BE%D1%80+%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F+%C2%AB%D0%94%D1%80%D0%B0%D0%BA%D1%83%D0%BB%D0%B0%C2%BB+%D0%91%D1%80%D1%8D%D0%BC+%D0%A1%D1%82%D0%BE%D0%BA%D0%B5%D1%80+%D1%82%D0%B0%D0%BA%D0%B6%D0%B5+%D0%BF%D0%B8%D1%81%D0%B0%D0%BB+%D0%B4%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B5+%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8%2C+%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B5+%D0%BA%D1%80%D0%B8%D1%82%D0%B8%D0%BA%D0%B8+%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BB%D0%B8+%C2%AB%D1%83%D0%B6%D0%B0%D1%81%D0%BD%D1%8B%D0%BC%D0%B8%C2%BB.'
}
```
`fact` - a key for necessary information
`fact/id` - fact's id on Randstuff server
`fact/text` - fact's text
Example:
```js
import { Randstuff } from './randstuff.js';
const rnd = new Randstuff();
rnd.get_random_fact().then((fact) => console.log(`Fact: ${fact["fact"]["text"]}`));
```
<br>

## Randstuff.get_random_question()
Returns object, e.g.:
```json
{
  question: {
    id: '1884',
    text: 'Какая из этих звезд - альфа созвездия Близнецов?',
    answer1: 'Поллукс',
    answer2: 'Кастор',
    answer3: 'Вега',
    answer4: 'Спика',
    level: 3
  }
}
```
`question` - a key for necessary information
`question/id` - question's id on Randstuff server
`question/text` - question's text
`question/answer[1-4]` - question's answers. To get the right answer, refer to [Randstuff.get_question_answer()](#randstuffget_question_answerid-number).
Example:
```js
import { Randstuff } from './randstuff.js';
const rnd = new Randstuff();
rnd.get_random_question().then((question) => {
    console.log(`Question: ${question["question"]["text"]}`);
    for(let i = 1; i <= 4; i++) {
        console.log(`Answer ${i}: ${question["question"]["answer" + i]}`);
    }
});
```
<br>

## Randstuff.get_random_wisdom()
Returns object, e.g.:
```json
{
  saying: {
    id: '819',
    text: 'Кто не знал любви, тот все равно что не жил.',
    author: 'Жан Батист Мольер'
  },
  share: '//vk.com/share.php?url=https://randstuff.ru/saying/819/&title=%D0%9A%D1%82%D0%BE+%D0%BD%D0%B5+%D0%B7%D0%BD%D0%B0%D0%BB+%D0%BB%D1%8E%D0%B1%D0%B2%D0%B8%2C+%D1%82%D0%BE%D1%82+%D0%B2%D1%81%D0%B5+%D1%80%D0%B0%D0%B2%D0%BD%D0%BE+%D1%87%D1%82%D0%BE+%D0%BD%D0%B5+%D0%B6%D0%B8%D0%BB.%0A%E2%80%94+%D0%96%D0%B0%D0%BD+%D0%91%D0%B0%D1%82%D0%B8%D1%81%D1%82+%D0%9C%D0%BE%D0%BB%D1%8C%D0%B5%D1%80'
}
```
`saying` - a key for necessary information
`saying/id` - wisdom's id on Randstuff server
`saying/text` - wisdom's text
`saying/author` - wisdom's author
Example:
```js
import { Randstuff } from './randstuff.js';
const rnd = new Randstuff();
rnd.get_random_wisdom().then((wisdom) => console.log(`Once upon a time ${wisdom["saying"]["author"]} said: "${wisdom["saying"]["text"]}"`));
```

## Randstuff.get_random_ticket()
Returns object, e.g.:
```json
{
  ticket: '249444',
  lucky: false,
  stat: { count: '58932911', lucky: '3258053' }
}
```
`ticket` - ticket's id. Always random number.
`lucky` - if ticket's lucky, returns `true`. Ticket is lucky when sum of first three digits equals sum of last three digits. E.g., `333261` will be lucky ticket because `3+3+3=9` equals `2+6+1=9`.
Example:
```js
import { Randstuff } from './randstuff.js';
const rnd = new Randstuff();
rnd.get_random_ticket().then((wisdom) => console.log(`Ticket number: ${ticket['ticket']}\nLucky: ${ticket['lucky'] ? 'yes' : 'no'}`));
```

## Randstuff.get_question_answer(id, number)
Accepts question's id (refer to [Randstuff.get_random_question()](#randstuffget_random_question)) and answer's number (0-3). Returns object, e.g.:
```json
{
  answer: { success: true, correct: '2' }, // id: 1776, number: 2
  stat: { total: 1, correct: 1, incorrect: 0 }
}
```
`answer/success` - true if `number` equals `answer/correct`.
`answer/correct` - correct answer's id.
Example:
```js
import { Randstuff } from './randstuff.js';
const rnd = new Randstuff();
rnd.get_question_answer(1776, 2).then((ans) => console.log(`Answer is ${ans["answer"]["success"] ? 'correct' : 'incorrect. Correct answer is ' + ans["answer"]["correct"]}`));
```