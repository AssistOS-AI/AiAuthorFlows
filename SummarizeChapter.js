export class SummarizeChapter {
    static description = "Creates the main ideas of the chapter";

    constructor() {
    }

    async start(context) {
        let document = assistOS.space.getDocument(context.documentId);
        let chapter = document.getChapter(context.chapterId);
        let prompt = `${context.prompt || "Please summarize the following chapter by making summaries for all paragraphs:"} "${JSON.stringify(chapter.simplifyChapter())}" . The response should have the following structure: ["paragraph 1 summary", "paragraph 2 summary", ... , "paragraph n summary"]`;
        let llm = assistOS.space.getLLM();
        let ideas = await llm.request(prompt, context.maxTokens);
        try {
            this.return(JSON.parse(ideas));
        } catch (e) {
            this.fail(e);
        }
    }
}