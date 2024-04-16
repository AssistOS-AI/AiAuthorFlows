export class SuggestChapter {
    static description = "Suggests a chapter alternative based on the current chapter";

    constructor() {
    }

    async start(context) {
        let prompt = `Please suggest a chapter based on the following idea: "${context.idea}". The answer should have the following structure: { "title": "A fitting chapter title for the content", "visibility": "show", "paragraphs": [ { "text": "Text for this paragraph", "mainIdea": "The main idea for this paragraph", "alternativeParagraphs": [] }, ...additional paragraphs in similar format... ], "alternativeChapters": [], "mainIdeas": ["Main idea 1 for the chapter", ...additional main ideas...] }`;
        let llm = assistOS.space.getLLM();
        let altChapter = await llm.brainstorm(prompt, 1);
        try {
            this.return(JSON.parse(altChapter));
        } catch (e) {
            this.fail(e);
        }
    }
}