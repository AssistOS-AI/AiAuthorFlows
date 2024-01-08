export class SuggestChapterTitles {
    static id = "iUjHrQoaqeH4";

    constructor() {
        this.name = "SuggestChapterTitles";
        this.description = "Generates n chapter titles";
    }

    start(documentId, chapterId, prompt, titlesNr, maxTokens) {
        let document = webSkel.currentUser.space.getDocument(documentId);
        let chapter = document.getChapter(chapterId);
        this.prompt = `${prompt || "Please suggest a title for this chapter"}: "${JSON.stringify(chapter.simplifyChapter())}". Return only the title without quotation marks.`;
        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute(document, chapter, titlesNr, maxTokens);
    }

    async execute(document, chapter, titlesNr, maxTokens) {
        let alternativeTitles = await this.brainstorm(this.prompt, titlesNr, maxTokens);

        try {
            JSON.parse(alternativeTitles);
        } catch (e) {
            this.fail(e);
        }

        this.return(alternativeTitles);
    }
}