export class DeleteAlternativeParagraph {
    static id = "2JrU4C2HA4Gj";

    constructor() {
        this.name = "DeleteAlternativeParagraph";
        this.description = "Deletes an alternative paragraph";
    }

    async start(documentId, chapterId, paragraphId, alternativeParagraphId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            paragraph.deleteAlternativeParagraph(alternativeParagraphId);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(alternativeParagraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}