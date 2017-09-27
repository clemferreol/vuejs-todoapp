{
  'use strict';

  new Vue ({
    //L'élément définissant le périmètre
    //d'action de l'application vue.js
    el : 'main#app',
    //Modèle de données de l'application
    data : {
      tasks : [
          {title : "Faire du sport", isDone : true},
          {title : "Ne pas manger comme un porc", isDone : false},
          {title : "Donner mon repas aux chiens", isDone : false}
      ],
      newTask:''
    },

    methods : {
      remaining : function(string){
        var count = 0
        for(var i = 0; i < this.tasks.length; i++){
          if(this.tasks[i].isDone == false)
          count++;
        }
        var multiple = count + ' ' + string;
        return count > 1 ? multiple + 's' : multiple
      },

      addTask : function(task) {
      let text = this.newTask;
      this.tasks.push({title: text, isDone: false});
      this.newTask = '';
      },

      removeTask : function(index){
      this.tasks.splice(index, 1);
      }
   }
  });
}
