export class SelectAlternativeParagraph {
    static id = "53HmewhG2Jqh";
    static description = "Swaps a paragraph with an alternative";

    constructor() {
    }

    async start(documentId, chapterId, paragraphId, alternativeParagraphId) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            paragraph.selectAlternativeParagraph(alternativeParagraphId);
            await system.factories.updateDocument(system.space.id, document);
            return alternativeParagraphId;
        } catch (e) {
            this.fail(e);
        }
    }
}