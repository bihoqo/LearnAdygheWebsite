export const QuestionTypes = {
    Open: 0,
    Multichoice: 1,
    Completion: 2,
    MultichoiceWordsPicture: 3,
    OpenPicture: 4,
    MultichoicePictures: 5,
    MultichoiceAudio: 6
}

export const exercises_1 = [
    [
        {
            type: QuestionTypes.MultichoiceAudio,
            questionText: 'what letter has this sound?',
            soundSample: ['Voiced_uvular_fricative.ogg'],
            answerOptions: ['г', 'гъ', 'хъ', 'р'],
            correctAnswers: ['гъ'],
            translateTo: 'English'
        },
        {
            type: QuestionTypes.Completion,
            questionText: 'The boy is going',
            answerOptions: ['мачъэ', 'л1ыр', 'к1алэр', 'мак1о'],
            correctAnswers: ['к1алэр мак1о'],
            translateTo: 'Circassian'
        },
        {
            type: QuestionTypes.Multichoice,
            questionText: 'Woman',
            answerOptions: ['к1алэ', 'л1ы', 'шъуз', 'пшъашъэ'],
            correctAnswers: ['шъуз'],
            translateTo: 'Circassian'
        },
        {
            type: QuestionTypes.Multichoice,
            questionText: 'Girl',
            answerOptions: ['к1алэ', 'л1ы', 'шъуз', 'пшъашъэ'],
            correctAnswers: ['пшъашъэ'],
            translateTo: 'English'
        }
    ],
    [
        {
            type: QuestionTypes.Completion,
            questionText: 'к1алэр унэм ихьагъ',
            answerOptions: ['the', 'boy', 'entered', 'the', 'house', 'inside', 'moved', 'man', 'houseentrance'],
            correctAnswers: ['the boy entered the house'],
            translateTo: 'English'
        },
        {
            type: QuestionTypes.Completion,
            questionText: 'the boy is running',
            answerOptions: ['мачъэ', 'л1ыр', 'к1алэр', 'мак1о'],
            correctAnswers: ['к1алэр мачъэ'],
            translateTo: 'Circassian'
        },
        {
            type: QuestionTypes.Multichoice,
            questionText: 'Man',
            answerOptions: ['к1алэ', 'л1ы', 'шъуз', 'пшъашъэ'],
            correctAnswers: ['л1ы'],
            translateTo: 'Circassian'
        },
        {
            type: QuestionTypes.Multichoice,
            questionText: 'Boy',
            answerOptions: ['к1алэ', 'л1ы', 'шъуз', 'пшъашъэ'],
            correctAnswers: ['к1алэ'],
            translateTo: 'Circassian'
        }
    ]
];

export const exercises_2 = [
    [
        {
            type: QuestionTypes.MultichoicePictures,
            questionText: 'Girl',
            pictures: ['girl.png', 'girl.png', 'girl.png', 'girl.png'],
            answerOptions: ['к1алэ', 'пшъашъэ', 'шъуз', 'л1ы'],
            correctAnswers: ['пшъашъэ']
        },
        {
            type: QuestionTypes.MultichoiceWordsPicture,
            questionText: 'What is in the picture?',
            pictures: ['girl.png'],
            answerOptions: ['к1алэ', 'пшъашъэ', 'сабый', 'л1ы'],
            correctAnswers: ['пшъашъэ'],
            translateTo: 'Circassian'
        },
        {
            type: QuestionTypes.Open,
            questionText: 'The boy is going (= к1алэр мак1о)',
            answerOptions: null,
            correctAnswers: ['к1алэр мак1о'],
            translateTo: 'Circassian'
        }
    ],
    [
        {
            type: QuestionTypes.Multichoice,
            questionText: 'Шъуз',
            answerOptions: ['boy', 'man', 'girl', 'woman'],
            correctAnswers: ['woman'],
            translateTo: 'English'
        },
        {
            type: QuestionTypes.MultichoiceWordsPicture,
            questionText: 'What is in the picture?',
            pictures: ['girl.png'],
            answerOptions: ['к1алэ', 'пшъашъэ', 'сабый', 'л1ы'],
            correctAnswers: ['пшъашъэ'],
            translateTo: 'Circassian'
        },
        {
            type: QuestionTypes.Open,
            questionText: 'The boy is running (= к1алэр мачъэ)',
            answerOptions: null,
            correctAnswers: ['к1алэр мачъэ'],
            translateTo: 'Circassian'
        }
    ],
    [
        {
            type: QuestionTypes.OpenPicture,
            questionText: 'What is in the picture? (= пшъашъэ)',
            pictures: ['girl.png'],
            answerOptions: null,
            correctAnswers: ['пшъашъэ'],
            translateTo: 'Circassian'
        },
        {
            type: QuestionTypes.Completion,
            questionText: 'к1алэр унэм ик1ыгъ',
            answerOptions: ['the', 'boy', 'entered', 'the', 'house', 'inside', 'moved', 'man', 'went out'],
            correctAnswers: ['the boy went out the house'],
            translateTo: 'English'
        }
    ]
];