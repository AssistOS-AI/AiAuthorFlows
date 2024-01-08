export class DeleteAlternativeChapter {
    static id = "2heR7cTx247z";

    constructor() {
        this.name = "DeleteAlternativeChapter";
        this.description = "Deletes an alternative chapter";
    }

    async start(documentId, chapterId, alternativeChapterId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.deleteAlternativeChapter(alternativeChapterId);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(alternativeChapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}