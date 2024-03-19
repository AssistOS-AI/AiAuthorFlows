export class AddAlternativeChapter {

   static id = "34rPf47UN8va" 
   static description = "Adds an alternative chapter";
    static dependencies = ["Chapter"];

   constructor(Chapter) {
       this.Chapter = Chapter;
   }
   async start(documentId, chapterId, alternativeChapter){
       let document = system.space.getDocument(documentId);
       let chapter = document.getChapter(chapterId)
       alternativeChapter.id=system.services.generateId();
       for(let paragraph of alternativeChapter.paragraphs){
           paragraph.id=system.services.generateId();
       }
       chapter.alternativeChapters.push(new this.Chapter(alternativeChapter));
       await system.factories.updateDocument(system.space.id, document);
   }
}