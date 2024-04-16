export class SelectAlternativeChapter {
    static description = "Swaps an alternative chapter with the current one";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.selectAlternativeChapter(context.alternativeChapterId);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.alternativeChapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}