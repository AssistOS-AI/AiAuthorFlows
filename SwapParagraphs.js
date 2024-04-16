export class SwapParagraphs {
    static description = "Swaps the order of 2 paragraphs";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);

            if (chapter.swapParagraphs(context.paragraphId1, context.paragraphId2)) {
                await assistOS.factories.updateDocument(assistOS.space.id, document);
                assistOS.space.currentParagraphId = context.paragraphId1;
            } else {
                this.fail(`Unable to swap paragraphs. ${context.paragraphId1}, ${context.paragraphId2}, Chapter: ${context.chapterId}`);
            }
            this.return(context.chapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}