export class DeleteAlternativeChapterTitle {
    static id = "3DQs5n32J319";

    constructor() {
        this.name = "DeleteAlternativeChapterTitle";
        this.description = "Deletes an alternative chapter title";
    }

    async start(documentId, chapterId, alternativeTitleId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.deleteAlternativeTitle(alternativeTitleId);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}