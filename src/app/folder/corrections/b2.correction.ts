import { ExamComponentKey, ExamComponentTitle, ExamCorrectionTemplate, LevelKeys } from '../models/english.models';

export const correctionB2: ExamCorrectionTemplate = {
    id: LevelKeys.B2,
    maxScore: 190,
    minPercentage: 60,
    background: '#ffc409',
    correctionTemplate: [
        [80, 100, 180, 190, 'Grade A (Level C1)'],
        [75, 79, 173, 179, 'Grade B (Pass)'],
        [60, 74, 160, 172, 'Grade C (Pass)'],
        [45, 59, 140, 159, 'Level B1 (Failed)']],
    components: [
        {
            id: ExamComponentKey.READING,
            title: ExamComponentTitle.READING,
            correctionTemplate: [[37, 180, 'Level C1'], [24, 160, 'Level B2'], [16, 140, 'Level B1'], [10, 122, '-']]
        },
        {
            id: ExamComponentKey.USE_OF_ENGLISH,
            title: ExamComponentTitle.USE_OF_ENGLISH,
            correctionTemplate: [[24, 180, 'Level C1'], [18, 160, 'Level B2'], [11, 140, 'Level B1'], [7, 122, '-']]
        },
        {
            id: ExamComponentKey.WRITING,
            title: ExamComponentTitle.WRITING,
            correctionTemplate: [[34, 180, 'Level C1'], [24, 160, 'Level B2'], [16, 140, 'Level B1'], [10, 122, '-']]
        },
        {
            id: ExamComponentKey.LISTENING,
            title: ExamComponentTitle.LISTENING,
            correctionTemplate: [[27, 180, 'Level C1'], [18, 160, 'Level B2'], [12, 140, 'Level B1'], [8, 122, '-']]
        },
        {
            id: ExamComponentKey.SPEAKING,
            title: ExamComponentTitle.SPEAKING,
            correctionTemplate: [[54, 180, 'Level C1'], [36, 160, 'Level B2'], [24, 140, 'Level B1'], [14, 122, '-']]
        }
    ]
};
