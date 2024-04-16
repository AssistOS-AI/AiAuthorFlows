export class UpdateAlternativeParagraph {
    static description = "Updates an alternative paragraph";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);
            paragraph.updateAlternativeParagraph(context.alternativeParagraphId, context.text);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.alternativeParagraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}