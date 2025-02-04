export class SelectAlternativeChapterTitle {
    static description = "Swaps an alternative title with the current one";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            await chapter.selectAlternativeTitle(context.alternativeTitleId);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}