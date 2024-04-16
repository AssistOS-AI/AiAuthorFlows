export class AddAlternativeChapter {
   static description = "Adds an alternative chapter";
    static dependencies = ["Chapter"];

   constructor(Chapter) {
       this.Chapter = Chapter;
   }
   async start(context){
       let document = assistOS.space.getDocument(context.documentId);
       let chapter = document.getChapter(context.chapterId)
       context.alternativeChapter.id=assistOS.services.generateId();
       for(let paragraph of context.alternativeChapter.paragraphs){
           paragraph.id=assistOS.services.generateId();
       }
       chapter.alternativeChapters.push(new this.Chapter(context.alternativeChapter));
       await assistOS.factories.updateDocument(assistOS.space.id, document);
   }
}