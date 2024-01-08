export class UpdateParagraphText {
    static id = "31NKgxUUAKup";

    constructor() {
        this.name = "UpdateParagraphText";
        this.description = "Updates the text of a paragraph";
    }

    async start(documentId, chapterId, paragraphId, text) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            paragraph.updateText(text);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(paragraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}