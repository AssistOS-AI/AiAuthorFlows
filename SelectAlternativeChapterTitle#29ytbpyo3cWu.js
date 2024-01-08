export class SelectAlternativeChapterTitle {
    static id = "29ytbpyo3cWu";

    constructor() {
        this.name = "SelectAlternativeChapterTitle";
        this.description = "Swaps an alternative title with the current one";
    }

    async start(documentId, chapterId, alternativeTitleId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            await chapter.selectAlternativeTitle(alternativeTitleId);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}