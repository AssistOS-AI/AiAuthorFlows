export class AcceptSuggestedParagraph {
    static id = "5Hbtj7jqzHc7";
    static description = "Adds a paragraph to the alternatives list";
    constructor() {

    }

    async start(documentId, chapterId, paragraphId, alternativeParagraph) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            let paragraph = chapter.getParagraph(paragraphId);

            paragraph.addAlternativeParagraph(alternativeParagraph);

            await documentFactory.updateDocument(
                webSkel.currentUser.space.id,
                document
            );

            this.return(alternativeParagraph);
        } catch (e) {
            this.fail(e);
        }
    }
}