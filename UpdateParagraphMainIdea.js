export class UpdateParagraphMainIdea {
    static description = "Updates the main idea of a paragraph";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);
            paragraph.setMainIdea(context.idea);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.idea);
        } catch (e) {
            this.fail(e);
        }
    }
}