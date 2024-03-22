export class AcceptSuggestedParagraph {
    static id = "5Hbtj7jqzHc7";
    static description = "Adds a paragraph to the alternatives list";
    constructor() {

    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);

            paragraph.addAlternativeParagraph(context.alternativeParagraph);

            await system.factories.updateDocument(
                system.space.id,
                document
            );

            this.return(context.alternativeParagraph);
        } catch (e) {
            this.fail(e);
        }
    }
}