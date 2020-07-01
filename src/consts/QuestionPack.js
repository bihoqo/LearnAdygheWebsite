
export const QuestionTypes = {
    Open: 0,
    Multichoice: 1,
    Completion: 2,
    MultichoiceWordsPicture: 3,
    OpenPicture: 4,
    MultichoicePictures: 5
}

export const exerciseQuesitons_1 = [
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is 0',
        answerOptions: ['1', '2', '3', '4', '5', '0'],
        correctAnswers: ['0'],
        translateTo: 'English'
    },
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is 1',
        answerOptions: ['1', '2', '3', '4', '5', '6'],
        correctAnswers: ['1'],
        translateTo: 'Circassian'
    },
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is 2',
        answerOptions: ['1', '2', '3', '4', '5', '6'],
        correctAnswers: ['2'],
        translateTo: 'English'
    },
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is 3',
        answerOptions: ['1', '2', '3', '4', '5', '6'],
        correctAnswers: ['3'],
        translateTo: 'Turkish'
    }
];

export const exerciseQuesitons_2 = [
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is 5',
        answerOptions: ['1', '2', '3', '4', '5', '0'],
        correctAnswers: ['5'],
        translateTo: 'English'
    },
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is 6',
        answerOptions: ['1', '2', '3', '4', '5', '6'],
        correctAnswers: ['6'],
        translateTo: 'Circassian'
    },
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is 7',
        answerOptions: ['1', '2', '3', '4', '5', '6'],
        correctAnswers: ['7'],
        translateTo: 'English'
    },
    {
        type: QuestionTypes.Multichoice,
        questionText: 'What is 8',
        answerOptions: ['1', '2', '3', '4', '5', '6'],
        correctAnswers: ['8'],
        translateTo: 'Turkish'
    }
];