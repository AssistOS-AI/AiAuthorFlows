export class UpdateAlternativeParagraph {
    static id = "2Qaq2y665BCk";
    static description = "Updates an alternative paragraph";

    constructor() {
    }

    async start(documentId, chapterId, paragraphId, alternativeParagraphId, text) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            paragraph.updateAlternativeParagraph(alternativeParagraphId, text);
            await system.factories.updateDocument(system.space.id, document);
            this.return(alternativeParagraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}