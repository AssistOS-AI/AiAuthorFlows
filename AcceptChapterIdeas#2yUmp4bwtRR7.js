export class AcceptChapterIdeas {
    static id = "2yUmp4bwtRR7";
    static description = "Replaces the current main ideas with the generated ones";
    constructor() {
    }

    async start(documentId, chapterId, ideas) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            await chapter.setMainIdeas(ideas.map(chapterIdea => webSkel.sanitize(chapterIdea)));
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(ideas);
        } catch (e) {
            this.fail(e);
        }
    }

}