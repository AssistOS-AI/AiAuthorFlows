export class UpdateChapterTitle {
    static description = "Updates the title of a chapter";
    static inputSchema = {
        documentId: "string",
        chapterId: "string",
        title: "string"
    }
    async start(context){
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let chapter = document.getChapter(context.chapterId);
            chapter.updateTitle(context.title);
            await assistOS.factories.updateDocument(assistOS.space.id, document);
            this.return(context.newTitle);
        } catch (e) {
            this.fail(e);
        }
    }
}