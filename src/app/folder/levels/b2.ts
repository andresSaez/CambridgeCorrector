import { EnglishLevel, ExamComponentKey, ExamComponentTitle, LevelKeys, SpeakingParts } from '../models/english.models';

export const b2: EnglishLevel = {
    id: LevelKeys.B2,
    components: [
      {
        id: ExamComponentKey.READING,
        title: ExamComponentTitle.READING,
        numberOfItems: 30,
        minScoreToPass: 24,
        maxScore: 42,
        icon: 'book',
        parts: [
          {
            name: 'Part 1',
            numberOfItems: 8,
            score: 8
          },
          {
            name: 'Part 5',
            numberOfItems: 6,
            score: 12
          },
          {
            name: 'Part 6',
            numberOfItems: 6,
            score: 12
          },
          {
            name: 'Part 7',
            numberOfItems: 10,
            score: 10
          }
        ]
      },
      {
          id: ExamComponentKey.USE_OF_ENGLISH,
          title: ExamComponentTitle.USE_OF_ENGLISH,
          numberOfItems: 22,
          minScoreToPass: 18,
          maxScore: 28,
          icon: 'briefcase',
          parts: [
            {
                name: 'Part 2',
                numberOfItems: 8,
                score: 8
            },
            {
            name: 'Part 3',
            numberOfItems: 8,
            score: 8
            },
            {
            name: 'Part 4',
            numberOfItems: 6,
            score: 12
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
        numberOfItems: 30,
        minScoreToPass: 18,
        maxScore: 30,
        icon: 'headset',
        parts: [
          {
            name: 'Part 1',
            numberOfItems: 8,
            score: 8
          },
          {
            name: 'Part 2',
            numberOfItems: 10,
            score: 10
          },
          {
            name: 'Part 3',
            numberOfItems: 5,
            score: 5
          },
          {
            name: 'Part 4',
            numberOfItems: 7,
            score: 7
          }
        ]
      },
      {
        id: ExamComponentKey.SPEAKING,
        title: ExamComponentTitle.SPEAKING,
        numberOfItems: 5,
        minScoreToPass: 36,
        maxScore: 60,
        icon: 'mic',
        parts: [
            {
              name: SpeakingParts.GRAMMAR_VOCAB,
              numberOfItems: null,
              score: 10
            },
            {
                name: SpeakingParts.DISCOURSE,
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
              score: 20
            }
        ]
      }
    ]
};
