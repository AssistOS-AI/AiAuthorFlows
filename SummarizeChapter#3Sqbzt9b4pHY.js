export class SummarizeChapter {
    static id = "3Sqbzt9b4pHY";

    constructor() {
        this.name = "SummarizeChapter";
        this.description = "Creates the main ideas of the chapter";
    }

    async start(documentId, chapterId, prompt, maxTokens) {
        let document = webSkel.currentUser.space.getDocument(documentId);
        let chapter = document.getChapter(chapterId);
        this.prompt = `${prompt || "Please summarize the following chapter by making summaries for all paragraphs:"} "${JSON.stringify(chapter.simplifyChapter())}" . The response should have the following structure: ["paragraph 1 summary", "paragraph 2 summary", ... , "paragraph n summary"]`;
        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute(maxTokens);
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