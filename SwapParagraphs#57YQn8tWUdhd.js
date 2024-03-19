export class SwapParagraphs {
    static id = "57YQn8tWUdhd";
    static description = "Swaps the order of 2 paragraphs";

    constructor() {
    }

    async start(documentId, chapterId, paragraphId1, paragraphId2) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);

            if (chapter.swapParagraphs(paragraphId1, paragraphId2)) {
                await system.factories.updateDocument(system.space.id, document);
                system.space.currentParagraphId = paragraphId1;
            } else {
                this.fail(`Unable to swap paragraphs. ${paragraphId1}, ${paragraphId2}, Chapter: ${chapterId}`);
            }

            this.return(chapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}