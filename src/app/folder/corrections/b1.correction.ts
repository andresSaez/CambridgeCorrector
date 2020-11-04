import { ExamComponentKey, ExamComponentTitle, ExamCorrectionTemplate, LevelKeys } from '../models/english.models';

export const correctionB1: ExamCorrectionTemplate = {
    id: LevelKeys.B1,
    maxScore: 170,
    minPercentage: 70,
    background: '#2dd36f',
    correctionTemplate: [
        [90, 100, 160, 170, 'Grade A (Level B2)'],
        [85, 89, 153, 159, 'Grade B (Pass)'],
        [70, 84, 140, 152, 'Grade C (Pass)'],
        [44, 69, 120, 139, 'Level A2 (Failed)']],
    components: [
        {
            id: ExamComponentKey.READING,
            title: ExamComponentTitle.READING,
            correctionTemplate: [[29, 160, 'Level B2'], [23, 140, 'Level B1'], [13, 120, 'Level A2'], [5, 102, '-']]
        },
        {
            id: ExamComponentKey.WRITING,
            title: ExamComponentTitle.WRITING,
            correctionTemplate: [[34, 160, 'Level B2'], [24, 140, 'Level B1'], [16, 120, 'Level A2'], [10, 102, '-']]
        },
        {
            id: ExamComponentKey.LISTENING,
            title: ExamComponentTitle.LISTENING,
            correctionTemplate: [[23, 160, 'Level B2'], [18, 140, 'Level B1'], [11, 120, 'Level A2'], [5, 102, '-']]
        },
        {
            id: ExamComponentKey.SPEAKING,
            title: ExamComponentTitle.SPEAKING,
            correctionTemplate: [[27, 160, 'Level B2'], [18, 140, 'Level B1'], [12, 120, 'Level A2'], [7, 102, '-']]
        }
    ]
};
