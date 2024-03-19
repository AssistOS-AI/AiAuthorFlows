export class SelectAlternativeChapterTitle {
    static id = "29ytbpyo3cWu";
    static description = "Swaps an alternative title with the current one";

    constructor() {
    }

    async start(documentId, chapterId, alternativeTitleId) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            await chapter.selectAlternativeTitle(alternativeTitleId);
            await system.factories.updateDocument(system.space.id, document);
            this.return(alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}