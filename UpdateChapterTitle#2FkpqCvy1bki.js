export class UpdateChapterTitle {
    static id = "2FkpqCvy1bki";
    static description = "Updates the title of a chapter";
    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.updateTitle(context.title);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.title);
        } catch (e) {
            this.fail(e);
        }
    }
}