export class AcceptChapterIdeas {
    static id = "2yUmp4bwtRR7";
    static description = "Replaces the current main ideas with the generated ones";
    constructor() {
    }

    async start(documentId, chapterId, ideas) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            await chapter.setMainIdeas(ideas.map(chapterIdea => system.UI.sanitize(chapterIdea)));
            await system.factories.updateDocument(system.space.id, document);
            this.return(ideas);
        } catch (e) {
            this.fail(e);
        }
    }

}