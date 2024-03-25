export class SwapChapters {
    static id = "4p7y8tRN5FTY";
    static description = "Swaps the order of 2 chapters";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            if (document.swapChapters(context.chapterId1, context.chapterId2)) {
                await system.factories.updateDocument(system.space.id, document);
                this.return(context.documentId);
            } else {
                this.fail(`Unable to swap chapters. ${context.chapterId1}, ${context.chapterId2}`);
            }
        } catch (e) {
            this.fail(e);
        }
    }
}