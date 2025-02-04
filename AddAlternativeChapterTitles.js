export class AddAlternativeChapterTitles {
    static description = "Adds selected chapter titles to the alternatives list";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.addAlternativeTitles(context.titles);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.titles);
        } catch (e) {
            this.fail(e);
        }
    }
}