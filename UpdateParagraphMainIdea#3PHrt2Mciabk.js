export class UpdateParagraphMainIdea {
    static id = "3PHrt2Mciabk";

    constructor() {
        this.name = "UpdateParagraphMainIdea";
        this.description = "Updates the main idea of a paragraph";
    }

    async start(documentId, chapterId, paragraphId, idea) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            paragraph.setMainIdea(idea);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(idea);
        } catch (e) {
            this.fail(e);
        }
    }
}