import { ExamComponentKey, ExamComponentTitle, ExamCorrectionTemplate, LevelKeys } from '../models/english.models';

export const correctionC2: ExamCorrectionTemplate = {
    id: LevelKeys.C2,
    maxScore: 230,
    minPercentage: 60,
    background: '#92949c',
    correctionTemplate: [
        [80, 100, 220, 230, 'Grade A (Level C2)'],
        [75, 79, 213, 219, 'Grade B (Pass)'],
        [60, 74, 200, 212, 'Grade C (Pass)'],
        [45, 59, 180, 199, 'Level C1 (Failed)']],
    components: [
        {
            id: ExamComponentKey.READING,
            title: ExamComponentTitle.READING,
            correctionTemplate: [[36, 220, 'Level C2'], [28, 200, 'Level C2'], [22, 180, 'Level C1'], [14, 162, '-']]
        },
        {
            id: ExamComponentKey.USE_OF_ENGLISH,
            title: ExamComponentTitle.USE_OF_ENGLISH,
            correctionTemplate: [[22, 220, 'Level C2'], [17, 200, 'Level C2'], [13, 180, 'Level C1'], [9, 162, '-']]
        },
        {
            id: ExamComponentKey.WRITING,
            title: ExamComponentTitle.WRITING,
            correctionTemplate: [[34, 220, 'Level C2'], [24, 200, 'Level C2'], [16, 180, 'Level C1'], [10, 162, '-']]
        },
        {
            id: ExamComponentKey.LISTENING,
            title: ExamComponentTitle.LISTENING,
            correctionTemplate: [[24, 220, 'Level C2'], [18, 200, 'Level C2'], [14, 180, 'Level C1'], [10, 162, '-']]
        },
        {
            id: ExamComponentKey.SPEAKING,
            title: ExamComponentTitle.SPEAKING,
            correctionTemplate: [[66, 220, 'Level C2'], [45, 200, 'Level C2'], [30, 180, 'Level C1'], [17, 162, '-']]
        }
    ]
};
