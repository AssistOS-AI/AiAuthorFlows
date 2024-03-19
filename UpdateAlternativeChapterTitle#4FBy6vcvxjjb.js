export class UpdateAlternativeChapterTitle {
    static id = "4FBy6vcvxjjb";
    static description = "Updates an alternative title of a chapter";

    constructor() {
    }

    async start(documentId, chapterId, alternativeTitleId, newTitle) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.updateAlternativeTitle(alternativeTitleId, newTitle);
            await system.factories.updateDocument(system.space.id, document);
            this.return(alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}