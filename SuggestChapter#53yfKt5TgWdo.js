export class SuggestChapter {
    static id = "53yfKt5TgWdo";

    constructor() {
        this.name = "SuggestChapter";
        this.description = "Suggests a chapter alternative based on the current chapter";
    }

    start(idea) {
        this.prompt = `Please suggest a chapter based on the following idea: "${idea}". The answer should have the following structure: { "title": "A fitting chapter title for the content", "visibility": "show", "paragraphs": [ { "text": "Text for this paragraph", "mainIdea": "The main idea for this paragraph", "alternativeParagraphs": [] }, ...additional paragraphs in similar format... ], "alternativeChapters": [], "mainIdeas": ["Main idea 1 for the chapter", ...additional main ideas...] }`;
        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute();
    }

    async execute() {
        let altChapter = await this.brainstorm(this.prompt, 1);
        try {
            JSON.parse(altChapter);
        } catch (e) {
            this.fail(e);
        }
        this.return(altChapter);
    }
}