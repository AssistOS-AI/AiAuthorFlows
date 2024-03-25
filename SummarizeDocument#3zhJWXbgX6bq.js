export class SummarizeDocument {
    static id = "3zhJWXbgX6bq";
    static description = "Creates the main ideas of the document";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapters = document.chapters.map((chapter) => chapter.simplifyChapter());
            this.prompt = `${context.prompt || "Please summarize the following document creating a main idea for all chapters:"} "${JSON.stringify(chapters)}". The response should have the following structure: ["document idea 1", "document idea 2", ..., "document idea n"]`;
            let ideas = await this.request(this.prompt, context.maxTokens);
            try {
                JSON.parse(ideas);
            } catch (e) {
                this.fail(e);
            }
            this.return(ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}