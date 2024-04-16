export class AcceptParagraphIdea {
    static description = "Replaces the current main idea with the generated one";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);
            await paragraph.setMainIdea(assistOS.UI.sanitize(context.idea));
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.idea);
        } catch (e) {
            this.fail(e);
        }
    }
}
