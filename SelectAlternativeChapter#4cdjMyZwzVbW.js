export class SelectAlternativeChapter {
    static id = "4cdjMyZwzVbW";

    constructor() {
        this.name = "SelectAlternativeChapter";
        this.description = "Swaps an alternative chapter with the current one";
    }

    async start(documentId, chapterId, alternativeChapterId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.selectAlternativeChapter(alternativeChapterId);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(alternativeChapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}