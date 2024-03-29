export class AddAlternativeChapterTitles {
    static id = "4APQs2JZ4Dqv";
    static description = "Adds selected chapter titles to the alternatives list";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.addAlternativeTitles(context.titles);
            await system.factories.updateDocument(system.space.id, document);
            this.return(context.titles);
        } catch (e) {
            this.fail(e);
        }
    }
}