export class DeleteAlternativeChapter {
    static id = "2heR7cTx247z";
    static description = "Deletes an alternative chapter";

    constructor() {
    }

    async start(documentId, chapterId, alternativeChapterId) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.deleteAlternativeChapter(alternativeChapterId);
            await system.factories.updateDocument(system.space.id, document);
            this.return(alternativeChapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}