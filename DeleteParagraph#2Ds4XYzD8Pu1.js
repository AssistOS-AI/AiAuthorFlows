export class DeleteParagraph {
    static id = "2Ds4XYzD8Pu1";

    constructor() {
        this.name = "DeleteParagraph";
        this.description = "Deletes a paragraph";
    }

    async start(documentId, chapterId, paragraphId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.deleteParagraph(paragraphId);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(paragraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}