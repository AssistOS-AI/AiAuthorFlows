export class DeleteAlternativeChapterTitle {
    static id = "3DQs5n32J319";
    static description = "Deletes an alternative chapter title";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.deleteAlternativeTitle(context.alternativeTitleId);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}