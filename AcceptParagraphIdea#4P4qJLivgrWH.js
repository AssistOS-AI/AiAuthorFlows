export class AcceptParagraphIdea {
    static id = "4P4qJLivgrWH";
    static description = "Replaces the current main idea with the generated one";

    constructor() {
    }

    async start(documentId, chapterId, paragraphId, idea) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            await paragraph.setMainIdea(sanitize(idea));
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(idea);
        } catch (e) {
            this.fail(e);
        }
    }
}