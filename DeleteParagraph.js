export class DeleteParagraph {
    static description = "Deletes a paragraph";
    static inputSchema = {
        documentId: "string",
        chapterId: "string",
        paragraphId: "string"
    }
    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.deleteParagraph(context.paragraphId);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.paragraphId);
        } catch (e) {
            this.fail(e);
        }
    }
}