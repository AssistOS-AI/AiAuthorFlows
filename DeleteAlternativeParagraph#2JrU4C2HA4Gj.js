export class DeleteAlternativeParagraph {
    static id = "2JrU4C2HA4Gj";
    static description = "Deletes an alternative paragraph";

    constructor() {
    }

    async start(documentId, chapterId, paragraphId, alternativeParagraphId) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            paragraph.deleteAlternativeParagraph(alternativeParagraphId);
            await system.factories.updateDocument(system.space.id, document);
            this.return(alternativeParagraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}