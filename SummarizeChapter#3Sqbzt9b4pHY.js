export class SummarizeChapter {
    static id = "3Sqbzt9b4pHY";
    static description = "Creates the main ideas of the chapter";

    constructor() {
    }

    async start(context) {
        let document = system.space.getDocument(context.documentId);
        let chapter = document.getChapter(context.chapterId);
        this.prompt = `${context.prompt || "Please summarize the following chapter by making summaries for all paragraphs:"} "${JSON.stringify(chapter.simplifyChapter())}" . The response should have the following structure: ["paragraph 1 summary", "paragraph 2 summary", ... , "paragraph n summary"]`;
        this.execute(context.maxTokens);
    }

    async execute(maxTokens) {
        let ideas = await this.request(this.prompt, maxTokens);
        try {
            JSON.parse(ideas);
        } catch (e) {
            this.fail(e);
        }
        this.return(ideas);
    }
}