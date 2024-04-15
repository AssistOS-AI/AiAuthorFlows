export class SummarizeParagraph {
    static id = "3HdkTcRVLrRU";
    static description = "Summarize paragraph";

    constructor() {
    }

    async start(context) {
        let document = assistOS.space.getDocument(context.documentId);
        let chapter = document.getChapter(context.chapterId);
        let paragraph = chapter.getParagraph(context.paragraphId);
        this.prompt = `${context.prompt || "Please summarize the following paragraph in a single idea:"} "${paragraph.text}". Return only the summary`;
        await this.execute(context.maxTokens);
    }

    async execute(maxTokens) {
        let idea = await this.request(this.prompt, maxTokens);
        this.return(idea);
    }
}