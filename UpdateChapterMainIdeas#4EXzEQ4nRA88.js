export class UpdateChapterMainIdeas {
    static id = "4EXzEQ4nRA88";
    static description = "Updates the main ideas of a chapter";

    constructor() {
    }

    async start(documentId, chapterId, ideas) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.setMainIdeas(ideas);
            await system.factories.updateDocument(system.space.id, document);
            this.return(ideas);
        } catch (e) {
            this.fail(e);
        }
    }
}