export class UpdateChapterTitle {
    static id = "2FkpqCvy1bki";

    constructor() {
        this.name = "UpdateChapterTitle";
        this.description = "Updates the title of a chapter";
    }

    async start(documentId, chapterId, newTitle) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.updateTitle(newTitle);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(newTitle);
        } catch (e) {
            this.fail(e);
        }
    }
}