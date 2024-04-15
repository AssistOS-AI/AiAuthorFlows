export class DeleteAlternativeParagraph {
    static id = "2JrU4C2HA4Gj";
    static description = "Deletes an alternative paragraph";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);
            paragraph.deleteAlternativeParagraph(context.alternativeParagraphId);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.alternativeParagraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}