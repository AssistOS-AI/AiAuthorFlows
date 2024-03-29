export class UpdateParagraphMainIdea {
    static id = "3PHrt2Mciabk";
    static description = "Updates the main idea of a paragraph";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);
            paragraph.setMainIdea(context.idea);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.idea);
        } catch (e) {
            this.fail(e);
        }
    }
}