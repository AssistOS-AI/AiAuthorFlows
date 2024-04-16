export class AcceptSuggestedParagraph {
    static description = "Adds a paragraph to the alternatives list";
    constructor() {

    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let paragraph = chapter.getParagraph(context.paragraphId);

            paragraph.addAlternativeParagraph(context.alternativeParagraph);

            await assistOS.factories.updateDocument(
                assistOS.space.id,
                document
            );

            this.return(context.alternativeParagraph);
        } catch (e) {
            this.fail(e);
        }
    }
}