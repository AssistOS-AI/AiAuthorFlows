export class SelectAlternativeChapter {
    static id = "4cdjMyZwzVbW";
    static description = "Swaps an alternative chapter with the current one";

    constructor() {
    }

    async start(documentId, chapterId, alternativeChapterId) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.selectAlternativeChapter(alternativeChapterId);
            await system.factories.updateDocument(system.space.id, document);
            this.return(alternativeChapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}