export class SwapParagraphs {
    static id = "57YQn8tWUdhd";

    constructor() {
        this.name = "SwapParagraphs";
        this.description = "Swaps the order of 2 paragraphs";
    }

    async start(documentId, chapterId, paragraphId1, paragraphId2) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);

            if (chapter.swapParagraphs(paragraphId1, paragraphId2)) {
                await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
                webSkel.currentUser.space.currentParagraphId = paragraphId1;
            } else {
                this.fail(`Unable to swap paragraphs. ${paragraphId1}, ${paragraphId2}, Chapter: ${chapterId}`);
            }

            this.return(chapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}