export class UpdateChapterMainIdeas {
    static id = "4EXzEQ4nRA88";

    constructor() {
        this.name = "UpdateChapterMainIdeas";
        this.description = "Updates the main ideas of a chapter";
    }

    async start(documentId, chapterId, ideas) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.setMainIdeas(ideas);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}