export class UpdateAlternativeParagraph {
    static id = "2Qaq2y665BCk";

    constructor() {
        this.name = "UpdateAlternativeParagraph";
        this.description = "Updates an alternative paragraph";
    }

    async start(documentId, chapterId, paragraphId, alternativeParagraphId, text) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            paragraph.updateAlternativeParagraph(alternativeParagraphId, text);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(alternativeParagraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}