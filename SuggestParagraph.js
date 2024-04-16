export class SuggestParagraph {
    static description = "Suggests a paragraph based on the current chapter";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let prompt = `${context.prompt || "Please suggest a paragraph that fits in the following chapter:"} "${JSON.stringify(chapter.simplifyChapter())}". The result should have the following structure: { "text": "paragraph text", "mainIdea": "main idea of the paragraph"}.`;
            let llm = assistOS.space.getLLM();
            let altParagraph = await llm.request(prompt, context.maxTokens);
            this.return(JSON.parse(altParagraph));
        } catch (e) {
            this.fail(e);
        }
    }

    async execute(maxTokens) {

    }
}