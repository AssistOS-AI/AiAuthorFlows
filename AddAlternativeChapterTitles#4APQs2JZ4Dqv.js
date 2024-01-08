export class AddAlternativeChapterTitles {
    static id = "4APQs2JZ4Dqv";

    constructor() {
        this.name = "AddAlternativeChapterTitles";
        this.description = "Adds selected chapter titles to the alternatives list";
    }

    async start(documentId, chapterId, selectedTitles) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            let chapter = document.getChapter(chapterId);
            chapter.addAlternativeTitles(selectedTitles);
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);
            this.return(selectedTitles);
        } catch (e) {
            this.fail(e);
        }
    }
}