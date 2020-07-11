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
        answerOptions: ['the', 'boy', 'entered', 'the', 'house', 'inside', 'moved', 'man', 'houseentrance'],
        correctAnswers: ['the boy entered the house'],
        translateTo: 'English'
    },
    {
        type: QuestionTypes.Completion,
        questionText: 'What is "the boy is going"',
        answerOptions: ['мачъэ', 'л1ыр', 'к1алэр', 'мак1о'],
        correctAnswers: ['к1алэр мак1о'],
        translateTo: 'Circassian'
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
    }
];

export const exerciseQuesitons_2 = [
    {
        type: QuestionTypes.MultichoiceAudio,
        questionText: 'what letter has this sound?',
        soundSample: ['Voiced_uvular_fricative.ogg'],
        answerOptions: ['г', 'гъ', 'хъ', 'р'],
        correctAnswers: ['гъ'],
        translateTo: 'English'
    },
    {
        type: QuestionTypes.MultichoicePictures,
        questionText: 'What is girl?',
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
        questionText: 'What is "the boy is going" (Pss the answer is к1алэр мак1о)',
        answerOptions: null,
        correctAnswers: ['к1алэр мак1о'],
        translateTo: 'Circassian'
    },
    {
        type: QuestionTypes.OpenPicture,
        questionText: 'What is in the picture? (Pss the answer is пшъашъэ)',
        pictures: ['girl.png'],
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