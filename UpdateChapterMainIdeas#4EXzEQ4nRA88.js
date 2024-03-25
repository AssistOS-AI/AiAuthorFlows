export class UpdateChapterMainIdeas {
    static id = "4EXzEQ4nRA88";
    static description = "Updates the main ideas of a chapter";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.setMainIdeas(context.ideas);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}