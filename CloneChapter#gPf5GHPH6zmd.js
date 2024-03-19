export class CloneChapter {
    static id = "gPf5GHPH6zmd";
    static description = "Creates an alternative for a chapter using a personality, using proofread if specified";

    constructor() {
    }

    async start(documentId, chapterId, personalityId, newTitle, proofread) {
        let document = system.space.getDocument(documentId);
        let chapter = document.getChapter(chapterId);
        let simplifiedChapter = JSON.stringify(chapter.simplifyChapter());

        if (proofread) {
            if (personalityId === "copy") {
                this.prompt = `Please review this chapter in its JSON format: ${simplifiedChapter}. Your task is to replicate the chapter as it is, maintaining its original context and format. Additionally, conduct a thorough proofreading to correct any grammatical errors, ambiguities, or inconsistencies, thereby refining the document to ensure clarity and accuracy.`;
            } else {
                let personality = system.space.getPersonality(personalityId);
                this.prompt = `Please carefully examine and comprehend this chapter, presented in JSON format: ${simplifiedChapter}. Your challenge is to replicate this chapter from the perspective of an individual characterized by certain distinct personality traits: ${personality.description}. In doing so, preserve the original context, yet adapt the language to reflect the unique linguistic style of this personality. Additionally, attentively identify and rectify any grammatical errors, ambiguities, or inconsistencies in the text, enhancing it with improved, clearer expressions.`;
            }
        } else {
            if (personalityId === "copy") {
                this.prompt = `Your objective is to duplicate this chapter exactly as it is, presented in JSON format: ${simplifiedChapter}. Please ensure that the copy you create is an exact replica of the original, maintaining the same context and structure, without making any modifications or corrections.`;
            } else {
                let personality = system.space.getPersonality(personalityId);
                this.prompt = `Please analyze and replicate this chapter, presented in JSON format: ${simplifiedChapter}, from the perspective of an individual with specific personality traits: ${personality.description}. While preserving the original context, adapt the language to mirror the linguistic style associated with these personality traits. Note that no proofreading for grammatical accuracy or consistency is required in this task.`;
            }
        }

        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute(document, chapter, newTitle);
    }

    async execute(document, chapter, newTitle) {
        let text = await this.request(this.prompt);

        try {
            let chapterObj = JSON.parse(text);
            chapterObj.title = newTitle;
            await chapter.addAlternativeChapter(chapterObj);
            await system.factories.updateDocument(system.space.id, document);
            this.return(JSON.stringify(chapterObj));
        } catch (e) {
            this.fail(e);
        }
    }
}