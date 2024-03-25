export class SelectAlternativeChapterTitle {
    static id = "29ytbpyo3cWu";
    static description = "Swaps an alternative title with the current one";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            await chapter.selectAlternativeTitle(context.alternativeTitleId);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}