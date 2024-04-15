export class SuggestChapterTitles {
    static id = "iUjHrQoaqeH4";
    static description = "Generates n chapter titles";

    constructor() {
    }

    start(context) {
        let document = assistOS.space.getDocument(context.documentId);
        let chapter = document.getChapter(context.chapterId);
        this.prompt = `${context.prompt || "Please suggest a title for this chapter"}: "${JSON.stringify(chapter.simplifyChapter())}". Return only the title without quotation marks.`;
        this.execute(document, chapter, context.titlesNr, context.maxTokens);
    }

    async execute(document, chapter, titlesNr, maxTokens) {
        let alternativeTitles = await this.brainstorm(this.prompt, titlesNr, maxTokens);
        try {
            this.return(JSON.parse(alternativeTitles));
        } catch (e) {
            this.fail(e);
        }
    }
}