import { EnglishLevel, ExamComponentKey, ExamComponentTitle, LevelKeys, SpeakingParts } from '../models/english.models';

export const a2: EnglishLevel = {
    id: LevelKeys.A2,
    components: [
      {
        id: ExamComponentKey.READING,
        title: ExamComponentTitle.READING,
        numberOfItems: 30,
        minScoreToPass: 20,
        maxScore: 30,
        icon: 'book',
        parts: [
          {
            name: 'Part 1',
            numberOfItems: 6,
            score: 6
          },
          {
            name: 'Part 2',
            numberOfItems: 7,
            score: 7
          },
          {
            name: 'Part 3',
            numberOfItems: 5,
            score: 5
          },
          {
            name: 'Part 4',
            numberOfItems: 6,
            score: 6
          },
          {
            name: 'Part 5',
            numberOfItems: 6,
            score: 6
          }
        ]
      },
      {
        id: ExamComponentKey.WRITING,
        title: ExamComponentTitle.WRITING,
        numberOfItems: 2,
        minScoreToPass: 18,
        maxScore: 30,
        icon: 'pencil',
        parts: [
          {
            name: 'Part 6',
            numberOfItems: 1,
            score: 15
          },
          {
            name: 'Part 7',
            numberOfItems: 1,
            score: 15
          }
        ]
      },
      {
        id: ExamComponentKey.LISTENING,
        title: ExamComponentTitle.LISTENING,
        numberOfItems: 25,
        minScoreToPass: 17,
        maxScore: 25,
        icon: 'headset',
        parts: [
          {
            name: 'Part 1',
            numberOfItems: 5,
            score: 5
          },
          {
            name: 'Part 2',
            numberOfItems: 5,
            score: 5
          },
          {
            name: 'Part 3',
            numberOfItems: 5,
            score: 5
          },
          {
            name: 'Part 4',
            numberOfItems: 5,
            score: 5
          },
          {
            name: 'Part 5',
            numberOfItems: 5,
            score: 5
          }
        ]
      },
      {
        id: ExamComponentKey.SPEAKING,
        title: ExamComponentTitle.SPEAKING,
        numberOfItems: 5,
        minScoreToPass: 27,
        maxScore: 45,
        icon: 'mic',
        parts: [
            {
              name: SpeakingParts.GRAMMAR_VOCAB,
              numberOfItems: null,
              score: 10
            },
            {
              name: SpeakingParts.PRONUNCIATION,
              numberOfItems: null,
              score: 10
            },
            {
              name: SpeakingParts.INTERACTION,
              numberOfItems: null,
              score: 10
            },
            {
              name: SpeakingParts.GLOBAL,
              numberOfItems: null,
              score: 10
            }
        ]
      }
    ]
};
