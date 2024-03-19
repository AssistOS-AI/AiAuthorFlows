export class SuggestParagraph {
    static id = "5XkyjKYcXUN3";
    static description = "Suggests a paragraph based on the current chapter";

    constructor() {
    }

    start(documentId, chapterId, paragraphId, prompt, maxTokens) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            this.prompt = `${prompt || "Please suggest a paragraph that fits in the following chapter:"} "${JSON.stringify(chapter.simplifyChapter())}". The result should have the following structure: { "text": "paragraph text", "mainIdea": "main idea of the paragraph"}.`;
            this.setDefaultValues();
            this.setIntelligenceLevel(3);
            this.execute(maxTokens);
        } catch (e) {
            this.fail(e);
        }
    }

    async execute(maxTokens) {
        let altParagraph = await this.request(this.prompt, maxTokens);
        try {
            JSON.parse(altParagraph);
        } catch (e) {
            this.fail(e);
        }
        this.return(altParagraph);
    }
}