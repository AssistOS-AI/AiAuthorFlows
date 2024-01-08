export class SummarizeParagraph {
    static id = "3HdkTcRVLrRU";

    constructor() {
        this.name = "SummarizeParagraph";
        this.description = "Summarize paragraph";
    }

    async start(documentId, chapterId, paragraphId, prompt, maxTokens) {
        let document = webSkel.currentUser.space.getDocument(documentId);
        let chapter = document.getChapter(chapterId);
        let paragraph = chapter.getParagraph(paragraphId);
        this.prompt = `${prompt || "Please summarize the following paragraph in a single idea:"} "${paragraph.text}". Return only the summary`;
        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute(maxTokens);
    }

    async execute(maxTokens) {
        let idea = await this.request(this.prompt, maxTokens);
        this.return(idea);
    }
}