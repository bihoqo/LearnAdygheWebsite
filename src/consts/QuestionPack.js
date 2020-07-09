export const QuestionTypes = {
    Open: 0,
    Multichoice: 1,
    Completion: 2,
    MultichoiceWordsPicture: 3,
    OpenPicture: 4,
    MultichoicePictures: 5,
    MultichoiceAudio: 6
}

export const exerciseQuesitons_1 = [
    {
        type: QuestionTypes.Completion,
        questionText: 'What is к1алэр унэм ихьагъ',
        answerOptions: ['the', 'boy', 'entered', 'the', 'house', 'inside', 'moved', 'man'],
        correctAnswers: ['the boy entered the house'],
        translateTo: 'English'
    },
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is woman',
        answerOptions: ['к1алэ', 'л1ы', 'шъуз', 'пшъашъэ'],
        correctAnswers: ['шъуз'],
        translateTo: 'Circassian'
    },
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is girl',
        answerOptions: ['к1алэ', 'л1ы', 'шъуз', 'пшъашъэ'],
        correctAnswers: ['пшъашъэ'],
        translateTo: 'English'
    },
    {
        type: QuestionTypes.Completion,
        questionText: 'What is "the boy is going"',
        answerOptions: ['мачъэ', 'л1ыр', 'к1алэр', 'мак1о'],
        correctAnswers: ['к1алэр мак1о'],
        translateTo: 'Circassian'
    }
];

export const exerciseQuesitons_2 = [
    {
        type: QuestionTypes.MultichoiceAudio,
        questionText: 'what letter has this sound?',
        soundSample: ['https://upload.wikimedia.org/wikipedia/commons/a/af/Voiced_uvular_fricative.ogg'],
        answerOptions: ['г', 'гъ', 'хъ', 'р'],
        correctAnswers: ['гъ'],
        translateTo: 'English'
    },
    {
        type: QuestionTypes.MultichoiceWordsPicture,
        questionText: 'What is in the picture?',
        pictures: ['https://i.ibb.co/6rLFFPr/noun-Woman-1392261.png'],
        answerOptions: ['к1алэ', 'пшъашъэ', 'сабый', 'л1ы'],
        correctAnswers: ['пшъашъэ'],
        translateTo: 'Circassian'
    },
    {
        type: QuestionTypes.Open,
        questionText: 'What is "the boy is going" (Pss the answer is к1алэр мак1о)',
        answerOptions: null,
        correctAnswers: ['к1алэр мак1о'],
        translateTo: 'Circassian'
    },
    {
        type: QuestionTypes.OpenPicture,
        questionText: 'What is in the picture? (Pss the answer is пшъашъэ)',
        pictures: ['https://i.ibb.co/6rLFFPr/noun-Woman-1392261.png'],
        answerOptions: null,
        correctAnswers: ['пшъашъэ'],
        translateTo: 'Circassian'
    },
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is к1алэ',
        answerOptions: ['boy', 'man', 'girl', 'woman'],
        correctAnswers: ['boy'],
        translateTo: 'English'
    }
];