export class UpdateParagraphMainIdea {
    static id = "3PHrt2Mciabk";
    static description = "Updates the main idea of a paragraph";

    constructor() {
    }

    async start(documentId, chapterId, paragraphId, idea) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);
            paragraph.setMainIdea(idea);
            await system.factories.updateDocument(system.space.id, document);
            this.return(idea);
        } catch (e) {
            this.fail(e);
        }
    }
}