export class AcceptParagraphIdea {
    static id = "4P4qJLivgrWH";
    static description = "Replaces the current main idea with the generated one";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);
            await paragraph.setMainIdea(system.UI.sanitize(context.idea));
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.idea);
        } catch (e) {
            this.fail(e);
        }
    }
}
