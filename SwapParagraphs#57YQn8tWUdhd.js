export class SwapParagraphs {
    static id = "57YQn8tWUdhd";
    static description = "Swaps the order of 2 paragraphs";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);

            if (chapter.swapParagraphs(context.paragraphId1, context.paragraphId2)) {
                await system.factories.updateDocument(system.space.id, document);
                system.space.currentParagraphId = context.paragraphId1;
            } else {
                this.fail(`Unable to swap paragraphs. ${context.paragraphId1}, ${context.paragraphId2}, Chapter: ${context.chapterId}`);
            }
            this.return(context.chapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}