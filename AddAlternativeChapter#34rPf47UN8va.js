export class AddAlternativeChapter {

   static id = "34rPf47UN8va" 
   static description = "Adds an alternative chapter";
    static dependencies = ["Chapter"];

   constructor(Chapter) {
       this.Chapter = Chapter;
   }
   async start(context){
       let document = system.space.getDocument(context.documentId);
       let chapter = document.getChapter(context.chapterId)
       context.alternativeChapter.id=system.services.generateId();
       for(let paragraph of context.alternativeChapter.paragraphs){
           paragraph.id=system.services.generateId();
       }
       chapter.alternativeChapters.push(new this.Chapter(context.alternativeChapter));
       await system.factories.updateDocument(system.space.id, document);
   }
}