export class SelectAlternativeParagraph {
    static id = "53HmewhG2Jqh";
    static description = "Swaps a paragraph with an alternative";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);
            paragraph.selectAlternativeParagraph(context.alternativeParagraphId);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.alternativeParagraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}