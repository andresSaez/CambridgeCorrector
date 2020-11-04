export enum LevelKeys {
    A2 = 'A2',
    B1 = 'B1',
    B2 = 'B2',
    C1 = 'C1',
    C2 = 'C2'
}

export interface EnglishLevel {
    id: string;
    components: ExamComponent[];
}

export interface ExamComponent {
    id: string;
    title: string;
    parts: ComponentPart[];
    numberOfItems: number;
    maxScore: number;
    minScoreToPass: number;
    icon: string;
}

export interface ComponentPart {
    name: string;
    numberOfItems: number;
    score: number;
}

export enum ExamComponentTitle {
    READING = 'Reading',
    WRITING = 'Writing',
    LISTENING = 'Listening',
    SPEAKING = 'Speaking',
    USE_OF_ENGLISH = 'Use of English'
}

export enum ExamComponentKey {
    READING = 'R',
    WRITING = 'W',
    LISTENING = 'L',
    SPEAKING = 'S',
    USE_OF_ENGLISH = 'UoE'
}

export enum SpeakingParts {
    GRAMMAR_VOCAB = 'Grammar & vocabulary',
    DISCOURSE = 'Discourse',
    PRONUNCIATION = 'Pronunciation',
    INTERACTION = 'Interaction',
    GLOBAL = 'Global',
    GRAMMAR = 'Grammar',
    LEXIS = 'Lexis'
}


export interface ComponentScore {
    id: string;
    totalPoints: number;
    percentage: number;
}

export interface ExamCorrectionTemplate {
    id: string;
    maxScore: number;
    minPercentage: number;
    background: string;
    correctionTemplate: any[];
    components: ComponentCorrectionTemplate[];
}

export interface ComponentCorrectionTemplate {
    id: string;
    title: string;
    correctionTemplate: any;
}
