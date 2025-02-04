export class AddParagraph {
    static description = "Adds a new paragraph to a chapter";
    static inputSchema = {
        documentId: "string",
        chapterId: "string",
    };
    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            let newParagraphId = assistOS.services.generateId();
            let position = chapter.paragraphs.length;

            if (assistOS.space.currentParagraphId) {
                position = chapter.getParagraphIndex(assistOS.space.currentParagraphId) + 1;
            }

            await chapter.addParagraph({ id: newParagraphId, text: "" }, position);
            await assistOS.factories.updateDocument(assistOS.space.id, document);

            assistOS.space.currentParagraphId = newParagraphId;
            assistOS.space.currentChapterId = chapter.id;

            this.return(context.chapterId);
        } catch (e) {
            this.fail(e);
        }
    }
}