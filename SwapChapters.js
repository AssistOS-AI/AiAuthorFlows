export class SwapChapters {
    static description = "Swaps the order of 2 chapters";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            if (document.swapChapters(context.chapterId1, context.chapterId2)) {
                await assistOS.factories.updateDocument(assistOS.space.id, document);
                this.return(context.documentId);
            } else {
                this.fail(`Unable to swap chapters. ${context.chapterId1}, ${context.chapterId2}`);
            }
        } catch (e) {
            this.fail(e);
        }
    }
}