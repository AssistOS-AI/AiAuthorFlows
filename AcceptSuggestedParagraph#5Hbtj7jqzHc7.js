export class AcceptSuggestedParagraph {
    static id = "5Hbtj7jqzHc7";
    static description = "Adds a paragraph to the alternatives list";
    constructor() {

    }

    async start(documentId, chapterId, paragraphId, alternativeParagraph) {
        try {
            let document = system.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);

            paragraph.addAlternativeParagraph(alternativeParagraph);

            await system.factories.updateDocument(
                system.space.id,
                document
            );

            this.return(alternativeParagraph);
        } catch (e) {
            this.fail(e);
        }
    }
}