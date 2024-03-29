export class UpdateParagraphText {
    static id = "31NKgxUUAKup";
    static description = "Updates the text of a paragraph";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);
            paragraph.updateText(context.text);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.paragraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}