export class UpdateAlternativeParagraph {
    static id = "2Qaq2y665BCk";
    static description = "Updates an alternative paragraph";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);
            paragraph.updateAlternativeParagraph(context.alternativeParagraphId, context.text);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.alternativeParagraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}