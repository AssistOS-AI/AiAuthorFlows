export class SummarizeParagraph {
    static description = "Summarize paragraph";

    constructor() {
    }

    async start(context) {
        let document = assistOS.space.getDocument(context.documentId);
        let chapter = document.getChapter(context.chapterId);
        let paragraph = chapter.getParagraph(context.paragraphId);
        let prompt = `${context.prompt || "Please summarize the following paragraph in a single idea:"} "${paragraph.text}". Return only the summary`;
        let llm = assistOS.space.getLLM();
        let idea = await llm.request(prompt, context.maxTokens);
        this.return(idea);
    }

    async execute(maxTokens) {

    }
}