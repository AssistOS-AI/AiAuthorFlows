export class DeleteAlternativeChapter {
    static id = "2heR7cTx247z";
    static description = "Deletes an alternative chapter";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.deleteAlternativeChapter(context.alternativeChapterId);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.alternativeChapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}