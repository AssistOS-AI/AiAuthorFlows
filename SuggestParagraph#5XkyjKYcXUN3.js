export class SuggestParagraph {
    static id = "5XkyjKYcXUN3";
    static description = "Suggests a paragraph based on the current chapter";

    constructor() {
    }

    start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            this.prompt = `${context.prompt || "Please suggest a paragraph that fits in the following chapter:"} "${JSON.stringify(chapter.simplifyChapter())}". The result should have the following structure: { "text": "paragraph text", "mainIdea": "main idea of the paragraph"}.`;
            this.execute(context.maxTokens);
        } catch (e) {
            this.fail(e);
        }
    }

    async execute(maxTokens) {
        let altParagraph = await this.request(this.prompt, maxTokens);
        try {
            this.return(JSON.parse(altParagraph));
        } catch (e) {
            this.fail(e);
        }
    }
}