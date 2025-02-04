export class UpdateChapterMainIdeas {
    static description = "Updates the main ideas of a chapter";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.setMainIdeas(context.ideas);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}