export class SummarizeDocument {
    static description = "Creates the main ideas of the document";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapters = document.chapters.map((chapter) => chapter.simplifyChapter());
            let prompt = `${context.prompt || "Please summarize the following document creating a main idea for all chapters:"} "${JSON.stringify(chapters)}". The response should have the following structure: ["document idea 1", "document idea 2", ..., "document idea n"]`;
            let llm = assistOS.space.getLLM();
            let ideas = await llm.request(prompt, context.maxTokens);
            this.return(JSON.parse(ideas));
        } catch (e) {
            this.fail(e);
        }
    }
}