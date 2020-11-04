import { ExamComponentKey, ExamComponentTitle, ExamCorrectionTemplate, LevelKeys } from '../models/english.models';

export const correctionC1: ExamCorrectionTemplate = {
    id: LevelKeys.C1,
    maxScore: 210,
    minPercentage: 60,
    background: '#eb445a',
    correctionTemplate: [
        [80, 100, 200, 210, 'Grade A (Level C2)'],
        [75, 79, 193, 199, 'Grade B (Pass)'],
        [60, 74, 180, 192, 'Grade C (Pass)'],
        [45, 59, 160, 179, 'Level B2 (Failed)']],
    components: [
        {
            id: ExamComponentKey.READING,
            title: ExamComponentTitle.READING,
            correctionTemplate: [[43, 200, 'Level C2'], [32, 180, 'Level C1'], [23, 160, 'Level B2'], [17, 142, '-']]
        },
        {
            id: ExamComponentKey.USE_OF_ENGLISH,
            title: ExamComponentTitle.USE_OF_ENGLISH,
            correctionTemplate: [[23, 200, 'Level C2'], [16, 180, 'Level C1'], [11, 160, 'Level B2'], [8, 142, '-']]
        },
        {
            id: ExamComponentKey.WRITING,
            title: ExamComponentTitle.WRITING,
            correctionTemplate: [[34, 200, 'Level C2'], [24, 180, 'Level C1'], [16, 160, 'Level B2'], [10, 142, '-']]
        },
        {
            id: ExamComponentKey.LISTENING,
            title: ExamComponentTitle.LISTENING,
            correctionTemplate: [[26, 200, 'Level C2'], [18, 180, 'Level C1'], [13, 160, 'Level B2'], [11, 142, '-']]
        },
        {
            id: ExamComponentKey.SPEAKING,
            title: ExamComponentTitle.SPEAKING,
            correctionTemplate: [[66, 200, 'Level C2'], [45, 180, 'Level C1'], [30, 160, 'Level B2'], [17, 142, '-']]
        }
    ]
};
