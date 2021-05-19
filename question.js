

//Array of Objets
const quiz = [
{
    q: "Where _____ at the moment?",
    options:['do you stay', ' are you staying', 'will you stay', 'have you stayed'],
    answer: 1
},
{
    q: "‘What _____?’ ‘He’s a musician.’",
    options:['he is doing', 'is he doing', 'does he do', 'does he'],
    answer: 2
},
{
    q: "Hannah likes studying languages, _____ Katie prefers science.",
    options:['whereas', 'and', 'since', 'however'],
    answer: 0
},
{
    q: "I’m really looking forward _____ my grandparents this weekend.",
    options:['visit', 'to visiting', 'to visit', 'visiting'],
    answer: 1
},
{
    q: "I _____ go to the concert with you.",
    options:['love', 'would love to', 'like to', 'would like'],
    answer: 1
},
{
    q: "My parents each have two sisters and they all have two children so I have a lot of _____.",
    options:['sisters-in-law', 'twins', 'relatives', 'families'],
    answer: 2
},
{
    q: "I can’t stand _____ war movies.",
    options:['to watch', 'in watching', 'watch', 'watching'],
    answer: 3
},
{
    q: "We set _____ on our trip at eight o’clock in the morning.",
    options:['up', 'off', 'over', 'for'],
    answer: 1
},
{
    q: "Your shoes are exactly the same _____ mine.",
    options:['as', 'than', 'to', 'with'],
    answer: 0
},
{
    q: "He doesn’t have _____ free time because of his job.",
    options:['many', 'lots', 'much', 'some'],
    answer: 2
},
{
    q: "Who ______ to your birthday party last night?",
    options:['did come', 'came', 'did came', 'comes'],
    answer: 1
},
{
    q: "Do you know who I _____ into at the cinema yesterday?",
    options:['knocked', 'met', 'bumped', 'crashed'],
    answer: 2
},
{
    q: "We _____ better not tell her what happened. She will be upset.",
    options:['would', 'did', 'should', 'had'],
    answer: 3
},
{
    q: "They’re not interested _____ politics.",
    options:['of', 'to', 'in', 'for'],
    answer: 2
},
{
    q: "_____ my opinion, you’re making a big mistake.",
    options:['Of', 'To', 'From', 'In'],
    answer: 3
},
{
    q: "She _____ in France when she was a child.",
    options:['’s lived', 'hasn’t lived', 'lived', 'didn’t lived'],
    answer: 2
},
{
    q: "I’ve been here _____ the beginning of September.",
    options:['since', 'for', 'ago', 'in'],
    answer: 0
},
{
    q: "We _____ to go horse-riding, but we don’t anymore.",
    options:['would use', 'are used', 'used', 'have used'],
    answer: 2
},
{
    q: "The café next to the station serves _____ coffee in the town.",
    options:['better', 'the best', 'the good', 'the good'],
    answer: 1
},
{
    q: "I’ll help you _____ that you do something for me.",
    options:['provided', 'as long', 'whether', 'instead'],
    answer: 0
},
{
    q: "It was _____ a boring film that I went to sleep.",
    options:['enough', 'too', 'so', 'such'],
    answer: 3
},
{
    q: "The green dress was _____ expensive than the red one.",
    options:['most', 'less', 'least', 'as'],
    answer: 1
},
{
    q: "There are very _____ people in the class today.",
    options:['few', 'lot', 'little', 'less'],
    answer: 0
},
{
    q: "We _____ dinner when there was a knock at the door.",
    options:['ate', 'have eaten', 'had eaten', 'were eating'],
    answer: 3
},
{
    q: "By the time I got home, everyone _____ the party.",
    options:['had left', 'has left', 'has been leaving', 'left'],
    answer: 0
},
{
    q: "Why _____ to the beach later?",
    options:['don’t we going', 'shall we go', 'we don’t go', 'don’t we go'],
    answer: 3
},
{
    q: "‘I don’t understand my homework.’ ‘Don’t worry! I _____ you.’",
    options:['help', '’m helping', '’ll help', '’ll have helped'],
    answer: 2
},
{
    q: "Do you know what the monthly _____ is for that job?",
    options:['credit', 'worth', 'earning', 'salary'],
    answer: 3
},
{
    q: "He was absolutely _____ after the cycle ride.",
    options:['tired', 'sleepy', 'exhausted', 'tiring'],
    answer: 2
},
{
    q: "Can you _____ out the problem with the new machine, please?",
    options:['deal', 'repair', 'sort', 'organise'],
    answer: 2
},
{
    q: "The ticket machine is out of _____. We’ll have to go in the office to buy a ticket.",
    options:['work', 'condition', 'order', 'place'],
    answer: 2
},
{
    q: "You _____ go there if you don’t want to.",
    options:['mustn’t', 'can’t', 'don’t have to', 'wouldn’t'],
    answer: 2
},
{
    q: "We were _____ to wait in the waiting room, but it was too hot.",
    options:['offered', 'supposed', 'suggested', 'considered'],
    answer: 1
},
{
    q: "We won’t go to the cinema _____ you come with us.",
    options:['in case', 'provided', 'unless', 'otherwise'],
    answer: 2
},
{
    q: "It’s important to have a balanced _____ to be healthy.",
    options:['exercise', 'food', 'shape', 'diet'],
    answer: 3
},
{
    q: "Since the _____ of the Internet the world has changed a lot.",
    options:['inspiration', 'invention', 'design', 'influence'],
    answer: 1
},
{
    q: "My brother will _____ from his holiday by the end of the week.",
    options:['have returned', 'have returning', 'be returned', 'has returned'],
    answer: 0
},
{
    q: "Did you have your car _____ yesterday or is it still in the garage?",
    options:['repair', 'repaired', 'repairing', 'repairs'],
    answer: 1
},
{
    q: "We took _____ of the special offer to save fifty percent on our holiday.",
    options:['benefit', 'profit', 'advantage', 'help'],
    answer: 2
},
{
    q: "I agree with not taking flights _____ to a point, but sometimes it’s necessary.",
    options:['over', 'up', 'in', 'by'],
    answer: 1
},
{
    q: "My computer _____ this morning and I lost everything!",
    options:['crashed', 'smashed', 'deleted', 'destroyed'],
    answer: 0
},
{
    q: "She _____ me she would be late.",
    options:['said', 'asked', 'requested', 'told'],
    answer: 3
},
{
    q: "What do you feel like _____ today?",
    options:['do', 'doing', 'you do', 'you’re doing'],
    answer: 1
},
{
    q: "He’s the man _____ father is a famous actor.",
    options:['who', 'that', 'whose', 'which'],
    answer: 2
},
{
    q: "Mark recommends _____ the book before seeing the film.",
    options:['reading', 'to reading', 'to read', 'us to read'],
    answer: 0
},
{
    q: "We did some exciting _____ in science this morning.",
    options:['conclusions', 'experiences', 'experiments', 'discoveries'],
    answer: 2
},
{
    q: "They _____ we go to Australia for a holiday.",
    options:['suggested', 'offered', 'reminded', 'invited'],
    answer: 0
},
{
    q: "We wouldn’t _____ the train if you had been ready on time.",
    options:['miss', 'missed', 'have missed', 'had been missing'],
    answer: 2
},
{
    q: "_____ you were on the phone, I finished writing my essay.",
    options:['During', 'While', 'As soon that', 'Whereas'],
    answer: 1
},
{
    q: "Is that the house _____ you used to live?",
    options:['which', 'where', 'what', 'that'],
    answer: 1
},


]