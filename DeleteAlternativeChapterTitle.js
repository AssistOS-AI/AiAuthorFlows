export class DeleteAlternativeChapterTitle {
    static description = "Deletes an alternative chapter title";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.deleteAlternativeTitle(context.alternativeTitleId);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}