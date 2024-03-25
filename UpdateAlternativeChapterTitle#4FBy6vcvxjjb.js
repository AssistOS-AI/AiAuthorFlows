export class UpdateAlternativeChapterTitle {
    static id = "4FBy6vcvxjjb";
    static description = "Updates an alternative title of a chapter";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.updateAlternativeTitle(context.alternativeTitleId, context.newTitle);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}