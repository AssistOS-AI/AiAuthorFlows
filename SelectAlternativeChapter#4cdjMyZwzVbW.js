export class SelectAlternativeChapter {
    static id = "4cdjMyZwzVbW";
    static description = "Swaps an alternative chapter with the current one";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.selectAlternativeChapter(context.alternativeChapterId);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.alternativeChapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}