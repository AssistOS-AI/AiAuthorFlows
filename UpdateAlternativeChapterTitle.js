export class UpdateAlternativeChapterTitle {
    static description = "Updates an alternative title of a chapter";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.updateAlternativeTitle(context.alternativeTitleId, context.newTitle);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}