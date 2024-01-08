export class SummarizeDocument {
    static id = "3zhJWXbgX6bq";

    constructor() {
        this.name = "SummarizeDocument";
        this.description = "Creates the main ideas of the document";
    }

    async start(documentId, prompt, maxTokens) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapters = document.chapters.map((chapter) => chapter.simplifyChapter());
            this.prompt = `${prompt || "Please summarize the following document creating a main idea for all chapters:"} "${JSON.stringify(
                chapters
            )}". The response should have the following structure: ["document idea 1", "document idea 2", ..., "document idea n"]`;
            this.setDefaultValues();
            this.setIntelligenceLevel(3);
            let ideas = await this.request(this.prompt, maxTokens);
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