export class SelectAlternativeParagraph {
    static id = "53HmewhG2Jqh";

    constructor() {
        this.name = "SelectAlternativeParagraph";
        this.description = "Swaps a paragraph with an alternative";
    }

    async start(documentId, chapterId, paragraphId, alternativeParagraphId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            paragraph.selectAlternativeParagraph(alternativeParagraphId);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            return alternativeParagraphId;
        } catch (e) {
            this.fail(e);
        }
    }
}