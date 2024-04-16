export class SelectAlternativeParagraph {
    static description = "Swaps a paragraph with an alternative";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);
            paragraph.selectAlternativeParagraph(context.alternativeParagraphId);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.alternativeParagraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}