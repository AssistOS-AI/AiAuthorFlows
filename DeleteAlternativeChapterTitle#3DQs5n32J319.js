export class DeleteAlternativeChapterTitle {
    static id = "3DQs5n32J319";
    static description = "Deletes an alternative chapter title";

    constructor() {
    }

    async start(documentId, chapterId, alternativeTitleId) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.deleteAlternativeTitle(alternativeTitleId);
            await system.factories.updateDocument(system.space.id, document);
            this.return(alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}