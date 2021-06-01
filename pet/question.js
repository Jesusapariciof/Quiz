

//Array of Objets
const quiz = [
    {
        q: "Where ____ you live?",
        options:['does', 'are', 'do', 'is'],
        answer: 2
    },
    {
        q: "____ your name?’",
        options:['What', 'Who', "What's", "Who's"],
        answer: 2
    },
    {
        q: "How ____ your name?",
        options:['do spell', 'do spell you', 'do you spell', 'are you spelling'],
        answer: 2
    },
    {
        q: "Helen ____ study on Saturdays because she has a part-time job.",
        options:['doesn’t often', 'often does', 'often doesn’t', 'not often'],
        answer: 0
    },
    {
        q: "____ happy when I’m listening to music.",
        options:['Always I am', 'I am always', 'I always', 'Am always'],
        answer: 1
    },
    {
        q: "We can't go out now, it ____.",
        options:['does rain', 'was raining', 'rains', 'is raining'],
        answer: 3
    },
    {
        q: "What ____? I'm an engineer.",
        options:['do you', 'are you doing', 'do you do', 'you do'],
        answer: 2
    },
    {
        q: "She never ____ to rock concerts.",
        options:['is going', 'goes', 'was going', 'has gone'],
        answer: 1
    },
    {
        q: "That ____ be Mr Jones over there, he's on holiday in America at the moment.",
        options:["can't", "mustn't", 'must', 'could'],
        answer: 0
    },
    {
        q: "They ____ up at 6 o'clock.",
        options:['are getting always', 'get sometimes', 'often get', 'never are getting'],
        answer: 2
    },
    {
        q: "You can look ____ the menu for the restaurant online.",
        options:['out', 'in', 'up', 'on'],
        answer: 2
    },
    {
        q: "Can you ____ up the music? I can&#39;t hear it very well.",
        options:['make', 'put', 'turn', 'switch'],
        answer: 2
    },
    {
        q: "We have decided ____ a new car.",
        options:['to buy', 'buy', 'buying', 'to buying'],
        answer: 0
    },
    {
        q: "Some people get stressed out ____ city life.",
        options:['of', 'to', 'by', 'for'],
        answer: 2
    },
    {
        q: "Before ____ home, they went to the café.",
        options:['to go', 'to going', 'going', 'go'],
        answer: 2
    },
    {
        q: "They ____ to England three years ago.",
        options:['were coming', 'did come', 'came', 'have come'],
        answer: 2
    },
    {
        q: "How long ____ in this shop?’ ‘I started six months ago.",
        options:['have worked', 'are you working', 'have you worked', 'do you work'],
        answer: 2
    },
    {
        q: "They've been here ____ yesterday.",
        options:['for', 'since', 'after', 'by'],
        answer: 1
    },
    {
        q: "____ the weather was terrible, we still went for a walk.",
        options:['Although', 'Despite', 'In spite of', 'However'],
        answer: 0
    },
    {
        q: "I like this dress. Can I try ____?",
        options:['on it', 'it out', 'it on', 'out it'],
        answer: 2
    },
    {
        q: "It's ____ to go swimming today. Perhaps we can go tomorrow.",
        options:['enough cold', 'too cold', 'such a cold', 'so cold'],
        answer: 1
    },
    {
        q: "____ the train was late, we missed the film.",
        options:['Because', 'Because of', 'So', 'At least'],
        answer: 0
    },
    {
        q: "This test is not as ____ I expected.",
        options:['easier than', 'easy than', 'easier', 'easy as'],
        answer: 3
    },
    {
        q: "This laptop is ____ than the other one.",
        options:['as expensive', 'less expensive', 'expensive', 'most expensive'],
        answer: 1
    },
    {
        q: "He's got a good ____ as a manager in a big company.",
        options:['work', 'employment', 'experience', 'job'],
        answer: 3
    },
    {
        q: "It's ____ interesting book. I'm sure you'll love it.",
        options:['so', 'such', 'such an', 'so much'],
        answer: 2
    },
    {
        q: "He ____ very fast when the accident happened.",
        options:['drove', 'has driven', 'is driving', 'was driving'],
        answer: 3
    },
    {
        q: "By the time she was 14, she ____ all the junior tennis competitions.",
        options:['has won', 'won', 'was wining', 'had won'],
        answer: 3
    },
    {
        q: "I'd like ____ paper to draw you a picture.",
        options:['an', 'some', 'any', 'a'],
        answer: 1
    },
    {
        q: "You must concentrate ____ your work.",
        options:['on', 'in', 'for', 'about'],
        answer: 0
    },
    {
        q: "This course is ____ to the one at our college.",
        options:['same', 'similar', 'as', 'like'],
        answer: 1
    },
    {
        q: "The ____ was only 2º C and we were freezing.",
        options:['temperature', 'climate', 'weather', 'forecast'],
        answer: 0
    },
    {
        q: "She ____ if she could come in.",
        options:['informed', 'said', 'told', 'asked'],
        answer: 3
    },
    {
        q: "They told me ____ outside the office.",
        options:['wait', 'I waited', 'to wait', 'must wait'],
        answer: 2
    },
    {
        q: "Have you got ____ umbrella? It might rain.",
        options:['the', 'an', 'a', '-'],
        answer: 1
    },
    {
        q: "My mother is ____ by history so she watches lots of documentaries.",
        options:['depressed', 'fascinated', 'frightened', 'encouraged'],
        answer: 1
    },
    {
        q: "They ____ to speak three languages since they were children.",
        options:['could', 'are able', 'can', 'have been able'],
        answer: 3
    },
    {
        q: "You must ____ attention to the teacher when you are in class.",
        options:['get', 'pay', 'take', 'make'],
        answer: 1
    },
    {
        q: "The new ship ____ in China.",
        options:['built', 'was built', 'has built', 'was building'],
        answer: 1
    },
    {
        q: "Nowadays talent ____ are very popular on television.",
        options:['shows', 'broadcasts', 'concerts', 'commercials'],
        answer: 0
    },
    {
        q: "Did you ____ in that new hairdresser&#39;s in the shopping centre?",
        options:['have cut your hair', 'get your hair cut', 'cut your hair', 'make your hair cut'],
        answer: 1
    },
    {
        q: "You should never ____ money to friends.",
        options:['borrow', 'buy', 'discount', 'lend'],
        answer: 3
    },
    {
        q: "‘I don’t understand the homework.’ ‘Don’t worry, I ____ you.’",
        options:['help', "'ll help", "'d help", 'helping'],
        answer: 1
    },
    {
        q: "What do you think ____ when all the oil runs out in the world.",
        options:['happens', 'is happening', 'will happen', 'has happened'],
        answer: 2
    },
    {
        q: "We need to ____ of all this rubbish. Can you help me?",
        options:['get out', 'get rid', 'make rid', 'throw out'],
        answer: 1
    },
    {
        q: "Why did you ____ the lesson today?",
        options:['miss', 'fail', 'lose', 'pass'],
        answer: 0
    },
    {
        q: "What ____ if you won a lot of money?",
        options:['would you do', 'are you doing', 'will you do', 'do you do'],
        answer: 0
    },
    {
        q: "I won't get to university ____ I work hard.",
        options:['if', 'when', 'unless', 'while'],
        answer: 2
    },
    {
        q: "My boss is away on a business ____ to America.",
        options:['trip', 'travel', 'journey', 'holiday'],
        answer: 0
    },
    {
        q: "Please ____ me to take the keys with me.",
        options:['remember', 'recognise', 'remind', 'memorise'],
        answer: 2
    },
    
    
    ]