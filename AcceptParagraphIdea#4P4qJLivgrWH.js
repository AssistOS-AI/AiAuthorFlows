export class AcceptParagraphIdea {
    static id = "4P4qJLivgrWH";
    static description = "Replaces the current main idea with the generated one";

    constructor() {
    }

    async start(documentId, chapterId, paragraphId, idea) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            await paragraph.setMainIdea(system.UI.sanitize(idea));
            await system.factories.updateDocument(system.space.id, document);
            this.return(idea);
        } catch (e) {
            this.fail(e);
        }
    }
}
