export class SuggestChapterTitles {
    static id = "iUjHrQoaqeH4";
    static description = "Generates n chapter titles";

    constructor() {
    }

    async start(context) {
        let document = assistOS.space.getDocument(context.documentId);
        let chapter = document.getChapter(context.chapterId);
        let prompt = `${context.prompt || "Please suggest a title for this chapter"}: "${JSON.stringify(chapter.simplifyChapter())}". Return only the title without quotation marks.`;
        let llm = assistOS.space.getLLM();
        let alternativeTitles = await llm.brainstorm(prompt, context.titlesNr, context.maxTokens);
        try {
            this.return(JSON.parse(alternativeTitles));
        } catch (e) {
            this.fail(e);
        }
    }
}