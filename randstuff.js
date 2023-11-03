import axios from 'axios';

class Randstuff {
    api = {
        link: 'https://randstuff.ru',
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36",
            "x-requested-with": "XMLHttpRequest",
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    async get_random_joke() {
        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/joke/generate`,
            headers: this.api.headers
        });  
        const joke = await resp.data; // returns "joke" object with 'id' and 'text' keys
        return joke;
    }

    async get_random_fact() {
        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/fact/generate`,
            headers: this.api.headers
        });
        const fact = await resp.data; // returns "fact" object with 'id' and 'text' keys
        return fact;
    }

    async get_random_ask(question = 'Есть ли смысл жизни?') {
        const data = new URLSearchParams();
        data.append('question', question); // use numbers

        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/ask/generate/`,
            headers: this.api.headers
        });
        const ask = await resp.data; // returns "fact" object with 'id' and 'text' keys
        return ask;
    }

    async get_random_wisdom() {
        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/saying/generate`,
            headers: this.api.headers
        });
        const wisdom = await resp.data; // returns "fact" object with 'id' and 'text' keys
        return wisdom;
    }

    async get_random_question() {
        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/question/generate`,
            headers: this.api.headers
        });
        const question = await resp.data; // returns "question" object with 'id' and 'text' keys
        return question;
    }

    async get_random_city(country = 'all') {
        const data = new URLSearchParams();
        data.append('country', country); // use numbers

        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/city/generate/`,
            headers: this.api.headers,
            data: data.toString()
        });
        const question = await resp.data; // returns "question" object with 'id' and 'text' keys
        return question;
    }

    async get_random_nickname(num = 1) {
        const data = new URLSearchParams();
        data.append('numbers', num); // use numbers

        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/nickname/generate/`,
            headers: this.api.headers,
            data: data.toString()
        });
        const nickname = await resp.data; // returns "question" object with 'id' and 'text' keys
        return nickname;
    }

    async get_question_answer(id, number) {
        const data = new URLSearchParams();
        data.append('id', id); // question id
        data.append('number', number); // idk

        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/question/answer/`,
            headers: this.api.headers,
            data: data.toString()
        });
        const answer = await resp.data; // returns "fact" object with 'id' and 'text' keys
        return answer;
    }

    async get_random_ticket() {
        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/ticket/generate`,
            headers: this.api.headers
        });
        const ticket = await resp.data; // returns "fact" object with 'id' and 'text' keys
        return ticket;
    }

    async get_random_password(len = 8, num = 0, char = 0) {
        const data = new URLSearchParams();
        data.append('length', len); // length of password
        data.append('numbers', num); // use numbers
        data.append('symbols', char); // use symbols

        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/password/generate/`,
            data: data.toString(),
            headers: this.api.headers
        });

        const password = await resp.data;
        return password;
    }

    async get_random_number(count = 1, start = 1, end = 100, list = null, unique = 0, tz = -480) {
        const data = new URLSearchParams();
        data.append('count', count); // count of numbers [1-50]
        data.append('from', 'range'); // range of numbers
        data.append('start', start); // start of range
        data.append('end', end); // end of range
        data.append('list', list); // custom numbers list [string]
        data.append('unique', unique); // exclude already generated numbers
        data.append('tz', tz) // idk whats this xD just leave it blank

        const resp = await axios({
            method: 'post',
            url: `${this.api.link}/number/generate/`,
            data: data.toString(),
            headers: this.api.headers
        });

        const number = await resp.data;
        return number;
    }
}

export { Randstuff }