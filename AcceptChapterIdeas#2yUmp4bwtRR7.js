export class AcceptChapterIdeas {
    static id = "2yUmp4bwtRR7";
    static description = "Replaces the current main ideas with the generated ones";
    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            await chapter.setMainIdeas(context.ideas.map(chapterIdea => assistOS.UI.sanitize(chapterIdea)));
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.ideas);
        } catch (e) {
            this.fail(e);
        }
    }

}