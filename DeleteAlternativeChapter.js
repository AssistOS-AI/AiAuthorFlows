export class DeleteAlternativeChapter {
    static description = "Deletes an alternative chapter";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.deleteAlternativeChapter(context.alternativeChapterId);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.alternativeChapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}