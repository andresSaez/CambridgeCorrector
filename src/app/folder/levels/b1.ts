import { EnglishLevel, ExamComponentKey, ExamComponentTitle, LevelKeys, SpeakingParts } from '../models/english.models';

export const b1: EnglishLevel = {
    id: LevelKeys.B1,
    components: [
      {
        id: ExamComponentKey.READING,
        title: ExamComponentTitle.READING,
        numberOfItems: 32,
        minScoreToPass: 23,
        maxScore: 32,
        icon: 'book',
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
            numberOfItems: 6,
            score: 6
          },
          {
            name: 'Part 6',
            numberOfItems: 6,
            score: 6
          }
        ]
      },
      {
        id: ExamComponentKey.WRITING,
        title: ExamComponentTitle.WRITING,
        numberOfItems: 2,
        minScoreToPass: 24,
        maxScore: 40,
        icon: 'pencil',
        parts: [
          {
            name: 'Part 1',
            numberOfItems: 1,
            score: 20
          },
          {
            name: 'Part 2',
            numberOfItems: 1,
            score: 20
          }
        ]
      },
      {
        id: ExamComponentKey.LISTENING,
        title: ExamComponentTitle.LISTENING,
        numberOfItems: 25,
        minScoreToPass: 18,
        maxScore: 25,
        icon: 'headset',
        parts: [
          {
            name: 'Part 1',
            numberOfItems: 7,
            score: 7
          },
          {
            name: 'Part 2',
            numberOfItems: 6,
            score: 6
          },
          {
            name: 'Part 3',
            numberOfItems: 6,
            score: 6
          },
          {
            name: 'Part 4',
            numberOfItems: 6,
            score: 6
          }
        ]
      },
      {
        id: ExamComponentKey.SPEAKING,
        title: ExamComponentTitle.SPEAKING,
        numberOfItems: 5,
        minScoreToPass: 18,
        maxScore: 30,
        icon: 'mic',
        parts: [
            {
              name: SpeakingParts.GRAMMAR_VOCAB,
              numberOfItems: null,
              score: 5
            },
            {
                name: SpeakingParts.DISCOURSE,
                numberOfItems: null,
                score: 5
            },
            {
              name: SpeakingParts.PRONUNCIATION,
              numberOfItems: null,
              score: 5
            },
            {
              name: SpeakingParts.INTERACTION,
              numberOfItems: null,
              score: 5
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
